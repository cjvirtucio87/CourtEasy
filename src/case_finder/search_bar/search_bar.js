export class Ctrl {
  constructor (OpinionSearch, $state, LoadSpin) {
    this.OpinionSearch = OpinionSearch;
    this.$state = $state;
    this.LoadSpin = LoadSpin;
    this.searchResults = [];
  }

  addTest() {
    const len = this.testArr.length;
    this.testArr.push(this.testArr[len-1] + 1);
  }

  removeTest() {
    this.testArr.pop();
  }

  search(keys) {
    const self = this;
    const present = self.present.bind(self);
    self._resetDetails();
    self.LoadSpin.searching();
    return self.OpinionSearch
      .search(keys)
      .then(self.LoadSpin.success(self.LoadSpin))
      .then(present);
  }

  select(item) {
    const self = this;
    self.opinion = item;
  }

  present(response) {
    const self = this;
    return angular.copy(response.data.results, self.searchResults);
  }

  fullText(opinion) {
    this.$state.go('caseFinder.show', {id: opinion.id});
  }

  _resetDetails() {
    this.opinion = undefined;
  }
}

Ctrl.$inject = ['OpinionSearch', '$state', 'LoadSpin'];

export const Component = {
  controller: 'SearchBarCtrl',
  template:
  `
  <general-search results='$ctrl.searchResults' on-select='$ctrl.select($event)' on-type='$ctrl.search($event)'></general-search>
  <opinion-details class='opinion-details' ng-if='$ctrl.opinion' on-fulltext='$ctrl.fullText($event)' opinion='$ctrl.opinion'></opinion-details>
  `
};
