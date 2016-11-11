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
  <script type='text/ng-template' id='resultTpl.html'>
    <a tabindex='-1'>
      <ul ng-repeat='(key,value) in match.model'>
        <li>{{key}}: {{value}}</li>
      </ul>
      <span ng-bind-html-unsafe='match.model'></span>
    </a>
  </script>

  <input type='text' uib-typeahead='result.caseName for result in $ctrl.search($viewValue)' ng-model='$ctrl.query' ng-model-options='{debounce: 1000}' typeahead-template-url='resultTpl.html' class='form-control'>
  `
};
