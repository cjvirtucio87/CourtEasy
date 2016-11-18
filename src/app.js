"use strict";
require('../style.scss');
// There's a nomod error if you try to use ES6 modules for angular.module and its dependencies.
var angular = require('angular');
var sanitize = require('angular-sanitize');
var animate = require('angular-animate');
var uiBootstrap = require('angular-ui-bootstrap');
var uiRouter = require('angular-ui-router');
var config_1 = require('./config');
// Components
var searchBar = require('./case_finder/search_bar/search_bar');
var generalSearch = require('./case_finder/search_bar/general_search');
var opinionDetails = require('./case_finder/search_bar/opinion_details');
var opinionFull = require('./case_finder/opinion/opinion_full');
// Services
var opinion_search_1 = require('./services/opinion_search');
var opinion_show_1 = require('./services/opinion_show');
angular.module('courtEasy', [uiBootstrap, uiRouter, sanitize, animate])
    .config(config_1.default)
    .service('OpinionSearch', opinion_search_1.OpinionSearch)
    .service('OpinionShow', opinion_show_1.OpinionShow)
    .controller('SearchBarCtrl', searchBar.Ctrl)
    .component('searchBar', searchBar.Component)
    .controller('GeneralSearchCtrl', generalSearch.Ctrl)
    .component('generalSearch', generalSearch.Component)
    .controller('OpinionDetailsCtrl', opinionDetails.Ctrl)
    .component('opinionDetails', opinionDetails.Component)
    .controller('OpinionFullCtrl', opinionFull.Ctrl)
    .component('opinionFull', opinionFull.Component);
//# sourceMappingURL=app.js.map