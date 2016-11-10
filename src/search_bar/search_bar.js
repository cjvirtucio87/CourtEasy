export class Ctrl {
  constructor (CourtListener) {
    this.CourtListener = CourtListener;
    this.searchResults = [];
  }

  search(keys) {
    const self = this;
    const present = self.present.bind(self);
    return self.CourtListener
      .search(keys)
      .then(present);
  }

  present(response) {
    return angular.copy(response.data.results, this.searchResults);
  }
}

Ctrl.$inject = ['CourtListener'];

export const Component = {
  controller: 'SearchBarCtrl',
  template:
  `
  <general-search results='$ctrl.searchResults' on-type='$ctrl.search($event)'></general-search>
  `
};
