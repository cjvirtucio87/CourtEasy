import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import * as searchBar from './case_finder/search_bar/search_bar.js';
import * as generalSearch from './case_finder/search_bar/general_search.js';
import config from './config.js';
import { OpinionSearch } from './services/opinion_search.js';

angular.module('courtEasy', [uiBootstrap, uiRouter])
  .config(config)
  .service('OpinionSearch', OpinionSearch)
  .controller('SearchBarCtrl', searchBar.Ctrl)
  .component('searchBar', searchBar.Component)
  .controller('GeneralSearchCtrl', generalSearch.Ctrl)
  .component('generalSearch', generalSearch.Component);
