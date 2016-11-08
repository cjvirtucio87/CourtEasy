require('restangular');
require('lodash');
import angular from 'angular';
import * as searchBar from './dashboard/search_bar.js';

angular.module('courtEasy', ['restangular'])
  .controller('SearchBarCtrl', searchBar.Ctrl)
  .component('searchBar', searchBar.Component);
