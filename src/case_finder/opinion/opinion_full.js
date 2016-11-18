"use strict";
var $ = require('jquery');
var Ctrl = (function () {
    function Ctrl($element) {
        // Scroll to full text upon loading.
        $('body').animate({
            scrollTop: $($element).offset().top
        }, 'slow');
    }
    Ctrl.$inject = ['$element'];
    return Ctrl;
}());
exports.Ctrl = Ctrl;
exports.Component = {
    controller: 'OpinionFullCtrl',
    bindings: {
        opinion: '<'
    },
    template: "\n  <div class='card'>\n    <p class='card-text' ng-bind-html='$ctrl.opinion'></p>\n  </div>\n  "
};
//# sourceMappingURL=opinion_full.js.map