"use strict";
var Ctrl = (function () {
    function Ctrl(OpinionSearch, $state) {
        this.OpinionSearch = OpinionSearch;
        this.$state = $state;
        this.searchResults = [];
    }
    Ctrl.prototype.search = function (keys) {
        var self = this;
        var present = self.present.bind(self);
        self.resetDetails();
        return self.OpinionSearch
            .search(keys)
            .then(self.present(self));
    };
    Ctrl.prototype.select = function (item) {
        this.opinion = item;
    };
    Ctrl.prototype.fullText = function (opinion) {
        this.onSelect({ $event: opinion });
    };
    Ctrl.prototype.present = function (self) {
        return function (response) { return angular.copy(response.data.results, self.searchResults); };
    };
    Ctrl.prototype.resetDetails = function () {
        this.opinion = undefined;
    };
    Ctrl.$inject = ['OpinionSearch', '$state'];
    return Ctrl;
}());
exports.Ctrl = Ctrl;
exports.Component = {
    controller: 'SearchBarCtrl',
    bindings: {
        onSelect: '&'
    },
    template: "\n  <div class='row'>\n    <div class='col-md'>\n    </div>\n    <div class='col-md-6 flex-md-middle'>\n      <general-search results='$ctrl.searchResults' on-select='$ctrl.select($event)' on-type='$ctrl.search($event)'></general-search>\n    </div>\n    <div class='col-md'>\n    </div>\n  </div>\n  <div class='row'>\n    <div class='col-md'>\n      <opinion-details ng-show='$ctrl.opinion' on-fulltext='$ctrl.fullText($event)' opinion='$ctrl.opinion'></opinion-details>\n    </div>\n  </div>\n  "
};
//# sourceMappingURL=search_bar.js.map