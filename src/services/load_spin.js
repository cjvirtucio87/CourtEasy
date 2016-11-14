import $ from 'jquery';
import map from 'lodash/map';

export class LoadSpin {
  constructor() {
    this._dom = {
      getLoading() {
        return $('i.fa-spin');
      }
    };
  }

  _tryHide(elGetter) {
    return Promise.try(elGetter()
      .stop(true, true)
      .hide()
      .then(() => true));
  }

  _killAnims() {
    const self = this;
    const promises = map(self._dom, self._tryHide);
    return Promise.all(promises);
  }

  _loading(self) {
    return () => self._dom.getLoading().show();
  }

  searching() {
    const self = this;
    self._killAnims().then(self.loading(self));
  }

  success() {
    this._dom.getLoading().hide();
  }
}
