export class Ctrl {
  constructor (OpinionSearch) {
    this.OpinionSearch = OpinionSearch;
    this.searchResults = [];
  }

  search(keys) {
    const self = this;
    const present = self.present.bind(self);
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
    const self = this;
  }
}

Ctrl.$inject = ['OpinionSearch'];

export const Component = {
  controller: 'SearchBarCtrl',
  template:
  `
  <general-search results='$ctrl.searchResults' on-select='$ctrl.select($event)' on-type='$ctrl.search($event)'></general-search>
  <opinion-details ng-if='$ctrl.opinion' on-fulltext='$ctrl.fullText($event)' opinion='$ctrl.opinion'></opinion-details>
  `
};
