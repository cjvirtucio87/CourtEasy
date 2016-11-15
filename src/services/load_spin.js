import Promise from 'bluebird';
import map from 'lodash/map';
import $ from 'jquery';

export class LoadSpin {
  constructor() {
    this._dom = {
      getLoading() {
        return $('i.fa-spin').first();
      }
    };
  }

  _tryHide(elGetter) {
    return Promise.try(() => elGetter().stop(true, true).hide());
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
    self._killAnims().then(self._loading(self));
  }

  success(self) {
    return response => {
      self._dom.getLoading().hide();
      return response;
    };
  }
}
