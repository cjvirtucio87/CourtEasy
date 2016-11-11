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

  select(id) {
    const self = this;
    console.log(id);
    self.onSelect({ $event: id });
  }

  present(response) {
    const self = this;
    return angular.copy(response.data.results, self.searchResults);
  }
}

Ctrl.$inject = ['OpinionSearch'];

export const Component = {
  controller: 'SearchBarCtrl',
  template:
  `
  <general-search results='$ctrl.searchResults' on-select='$ctrl.select($event)' on-type='$ctrl.search($event)'></general-search>
  `
};
