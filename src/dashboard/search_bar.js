export class Ctrl {
  constructor (CourtListener) {
    this.CourtListener = CourtListener;
    this.searchResults = [];
  }

  search(keys) {
    const model = this.searchResults;
    const results = this.CourtListener.search(keys);
    angular.copy(model, results);
  }
}

Ctrl.$inject = ['CourtListener'];

export const Component = {
  controller: 'SearchBarCtrl',
  template:
  `
  <input type='text' uib-typeahead='result for result in $ctrl.search($viewValue)' ng-model='query'>
  `
};
