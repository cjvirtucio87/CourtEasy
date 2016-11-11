require('angular-ui-bootstrap');
require('angular-ui-router');

import angular from 'angular';
import * as searchBar from './search_bar/search_bar.js';
import * as generalSearch from './search_bar/general_search.js';
import config from './config.js';
import { OpinionSearch } from './services/opinion_search.js';

angular.module('courtEasy', ['ui.bootstrap', 'ui.router'])
  .config(config)
  .service('OpinionSearch', OpinionSearch)
  .controller('SearchBarCtrl', searchBar.Ctrl)
  .component('searchBar', searchBar.Component)
  .controller('GeneralSearchCtrl', generalSearch.Ctrl)
  .component('generalSearch', generalSearch.Component);
