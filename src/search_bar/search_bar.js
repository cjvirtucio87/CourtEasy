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

  present(response) {
    return angular.copy(response.data.results, this.searchResults);
  }
}

Ctrl.$inject = ['OpinionSearch'];

export const Component = {
  controller: 'SearchBarCtrl',
  template:
  `
  <general-search results='$ctrl.searchResults' on-type='$ctrl.search($event)'></general-search>
  `
};
