export class Ctrl {
  constructor () {
  }

  search(keys) {
    const message = angular.copy(keys, []);
    return this.onType({$event: message});
  }
}

export const Component = {
  controller: 'GeneralSearchCtrl',
  bindings: {
    results: '<',
    onType: '&'
  },
  template:
  `
  <input type='text' uib-typeahead='result for result in $ctrl.search($viewValue)' ng-model='$ctrl.query' ng-model-options='{debounce: 1000}'>
  `
};
