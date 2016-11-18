require('../style.scss');

// There's a nomod error if you try to use ES6 modules for angular.module and its dependencies.
const angular = require('angular');
const sanitize =  require('angular-sanitize');
const animate = require('angular-animate');
const uiBootstrap = require('angular-ui-bootstrap');
const uiRouter =  require('angular-ui-router');
import config from './config';

// Components
import * as searchBar from './case_finder/search_bar/search_bar';
import * as generalSearch from './case_finder/search_bar/general_search';
import * as opinionDetails from './case_finder/search_bar/opinion_details';
import * as opinionFull from './case_finder/opinion/opinion_full';

// Services
import { OpinionSearch } from './services/opinion_search';
import { OpinionShow } from './services/opinion_show';

angular.module('courtEasy', [uiBootstrap, uiRouter, sanitize, animate])
  .config(config) 
  .service('OpinionSearch', OpinionSearch)
  .service('OpinionShow', OpinionShow)
  .controller('SearchBarCtrl', searchBar.Ctrl)
  .component('searchBar', searchBar.Component)
  .controller('GeneralSearchCtrl', generalSearch.Ctrl)
  .component('generalSearch', generalSearch.Component)
  .controller('OpinionDetailsCtrl', opinionDetails.Ctrl)
  .component('opinionDetails', opinionDetails.Component)
  .controller('OpinionFullCtrl', opinionFull.Ctrl)
  .component('opinionFull', opinionFull.Component);
