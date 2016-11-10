export class Ctrl {
  constructor (CourtListener) {
    this.CourtListener = CourtListener;
    this.searchResults = [];
  }

  search(keys) {
    const self = this;
    const model = self.searchResults;
    self.CourtListener
      .search(keys)
      .then(self.present(model));
  }

  present(model) {
    return cached => {
      angular.copy(cached, model);
    };
  }
}

Ctrl.$inject = ['CourtListener'];

export const Component = {
  controller: 'SearchBarCtrl',
  template:
  `
  <general-search query='$ctrl.searchResults' on-type='$ctrl.search($event)'></general-search>
  `
};
