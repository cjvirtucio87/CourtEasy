require('restangular');
require('lodash');
require('angular-bootstrap-npm');

import angular from 'angular';
import * as searchBar from './search_bar/search_bar.js';
import * as generalSearch from './search_bar/general_search.js';
import config from './config.js';
import { CourtListener } from './services/court_listener.js';

angular.module('courtEasy', ['restangular', 'ui.bootstrap'])
  .config(config)
  .service('CourtListener', CourtListener)
  .controller('SearchBarCtrl', searchBar.Ctrl)
  .component('searchBar', searchBar.Component)
  .controller('GeneralSearchCtrl', generalSearch.Ctrl)
  .component('generalSearch', generalSearch.Component);
