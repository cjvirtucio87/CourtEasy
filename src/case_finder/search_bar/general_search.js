export class Ctrl {
  search(keys) {
    const message = angular.copy(keys, []);
    return this.onType({$event: message});
  }

  select($item) {
    const self = this;
    console.log($item);
    // self.onSelect({ $event: id });
  }
}

export const Component = {
  controller: 'GeneralSearchCtrl',
  bindings: {
    results: '<',
    onType: '&',
    onSelect: '&'
  },
  template:
  `
  <script type='text/ng-template' id='resultTpl.html'>
    <a tabindex='-1' ng-style="{ cursor: 'pointer' }">
      <p>{{match.model.caseName}}, {{match.model.citation[0]}}</p>
      <span ng-bind-html-unsafe='match.model'></span>
    </a>
  </script>

  <input type='text' uib-typeahead="result.caseName for result in $ctrl.search($viewValue)" ng-model='$ctrl.query' ng-model-options='{debounce: 1000}' typeahead-template-url='resultTpl.html' typeahead-on-select='$ctrl.select' class='form-control'>
  `
};


// <ul ng-repeat='(key,value) in match.model'>
//   <li>{{key}}: {{value}}</li>
// </ul>
