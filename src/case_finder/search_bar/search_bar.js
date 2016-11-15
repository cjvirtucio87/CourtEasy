export class Ctrl {
  constructor (OpinionSearch, $state, LoadSpin) {
    this.OpinionSearch = OpinionSearch;
    this.$state = $state;
    this.LoadSpin = LoadSpin;
    this.searchResults = [];
  }

  _present(self) {
    return response => { return angular.copy(response.data.results, self.searchResults) };
  }

  _resetDetails() {
    this.opinion = undefined;
  }

  _success(self) {
    return response => {
      self.LoadSpin.success(self.LoadSpin);
      return response;
    };
  }

  search(keys) {
    const self = this;
    const present = self._present.bind(self);
    self._resetDetails();
    return self.OpinionSearch
      .search(keys)
      .then(self._success(self))
      .then(self._present(self));
  }

  select(item) {
    this.opinion = item;
  }

  fullText(opinion) {
    this.$state.go('caseFinder.show', {id: opinion.id});
  }
}

Ctrl.$inject = ['OpinionSearch', '$state', 'LoadSpin'];

export const Component = {
  controller: 'SearchBarCtrl',
  template:
  `
  <div class='row'>
    <div class='col-md'>
    </div>
    <div class='col-md-6 flex-md-middle'>
      <general-search results='$ctrl.searchResults' on-select='$ctrl.select($event)' on-type='$ctrl.search($event)'></general-search>
    </div>
    <div class='col-md'>
    </div>
  </div>
  <div class='row'>
    <div class='col-md'>
      <opinion-details class='opinion-details' ng-if='$ctrl.opinion' on-fulltext='$ctrl.fullText($event)' opinion='$ctrl.opinion'></opinion-details>
    </div>
  </div>
  `
};
