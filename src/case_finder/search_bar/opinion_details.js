"use strict";
var Ctrl = (function () {
    function Ctrl() {
    }
    Ctrl.prototype.fullText = function (opinion) {
        this.onFulltext({ $event: angular.copy(opinion, {}) });
    };
    return Ctrl;
}());
exports.Ctrl = Ctrl;
exports.Component = {
    controller: 'OpinionDetailsCtrl',
    bindings: {
        opinion: '<',
        onFulltext: '&'
    },
    template: "\n  <div class='card'>\n    <div ng-if='$ctrl.opinion' class='card-block opinion-animate'>\n      <p class='card-text'><strong>{{$ctrl.opinion.caseName}}</strong> was decided by the {{$ctrl.opinion.court}}, and filed before it on <strong>{{$ctrl.opinion.dateFiled | date}}</strong></p>\n      <p class='card-text'>Here's an excerpt from the text: </p>\n      <blockquote class='blockquote'>\n        <p class='card-text' ng-style=\"{cursor: 'pointer'}\" ng-click='$ctrl.fullText($ctrl.opinion)' ng-bind-html='$ctrl.opinion.snippet'></p>\n      </blockquote>\n    </div>\n  </div>\n  "
};
//# sourceMappingURL=opinion_details.js.map