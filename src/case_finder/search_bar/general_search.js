"use strict";
var Ctrl = (function () {
    function Ctrl() {
    }
    Ctrl.prototype.search = function (keys) {
        var message = angular.copy(keys, []);
        return this.onType({ $event: message });
    };
    Ctrl.prototype.select = function ($item) {
        this.onSelect({ $event: angular.copy($item, {}) });
    };
    return Ctrl;
}());
exports.Ctrl = Ctrl;
exports.Component = {
    controller: 'GeneralSearchCtrl',
    bindings: {
        results: '<',
        onType: '&',
        onSelect: '&'
    },
    template: "\n  <script type='text/ng-template' id='resultTpl.html'>\n    <a tabindex='-1' ng-style=\"{ cursor: 'pointer' }\">\n      <p>{{match.model.caseName}}, {{match.model.citation[0]}}</p>\n      <span ng-bind-html-unsafe='match.model'></span>\n    </a>\n  </script>\n\n  <input type='text' uib-typeahead=\"result.caseName for result in $ctrl.search($viewValue)\" ng-model='$ctrl.query' ng-model-options='{debounce: 400}' typeahead-template-url='resultTpl.html' typeahead-on-select='$ctrl.select($item)' class='form-control'>\n  <i class='fa fa-spin fa-spinner fa-lg'></i>\n  "
};
//# sourceMappingURL=general_search.js.map