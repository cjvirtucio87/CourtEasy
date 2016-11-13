export class Ctrl {
  constructor (OpinionSearch, $state) {
    this.OpinionSearch = OpinionSearch;
    this.$state = $state;
    this.searchResults = [];
  }

  search(keys) {
    const self = this;
    const present = self.present.bind(self);
    self._resetDetails();
    return self.OpinionSearch
      .search(keys)
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
    console.log('firing');
    this.opinion = undefined;
  }
}

Ctrl.$inject = ['OpinionSearch', '$state'];

export const Component = {
  controller: 'SearchBarCtrl',
  template:
  `
  <general-search results='$ctrl.searchResults' on-select='$ctrl.select($event)' on-type='$ctrl.search($event)'></general-search>
  <opinion-details ng-if='$ctrl.opinion' on-fulltext='$ctrl.fullText($event)' opinion='$ctrl.opinion'></opinion-details>
  `
};
