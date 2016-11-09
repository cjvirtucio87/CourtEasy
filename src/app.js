require('restangular');
require('lodash');
require('angular-bootstrap-npm');

import angular from 'angular';
import * as searchBar from './dashboard/search_bar.js';
import config from './config.js';
import { CourtListener } from './services/court_listener.js';

angular.module('courtEasy', ['restangular', 'ui.bootstrap'])
  .config(config)
  .service('CourtListener', CourtListener)
  .controller('SearchBarCtrl', searchBar.Ctrl)
  .component('searchBar', searchBar.Component);
