export class Ctrl {
  constructor () {
  }

  search(keys) {
    const message = angular.copy(keys, []);
    this.onType({$event: message});
  }
}

export const Component = {
  controller: 'GeneralSearchCtrl',
  bindings: {
    query: '<',
    onType: '&'
  },
  template:
  `
  <input type='text' uib-typeahead='result for result in $ctrl.search($viewValue)' ng-model='query' ng-model-options='{debounce: 1000}'>
  `
};
