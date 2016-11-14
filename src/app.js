require('../style.scss');
require('bluebird');

import angular from 'angular';
import sanitize from 'angular-sanitize';
import animate from 'angular-animate';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import config from './config.js';

// Components
import * as searchBar from './case_finder/search_bar/search_bar.js';
import * as generalSearch from './case_finder/search_bar/general_search.js';
import * as opinionDetails from './case_finder/search_bar/opinion_details.js';
import * as opinionFull from './case_finder/opinion/opinion_full.js';

// Services
import { OpinionSearch } from './services/opinion_search.js';
import { OpinionShow } from './services/opinion_show.js';
import { LoadSpin } from './services/load_spin.js';

angular.module('courtEasy', [uiBootstrap, uiRouter, sanitize, animate])
  .config(config)
  .service('OpinionSearch', OpinionSearch)
  .service('OpinionShow', OpinionShow)
  .service('LoadSpin', LoadSpin)
  .controller('SearchBarCtrl', searchBar.Ctrl)
  .component('searchBar', searchBar.Component)
  .controller('GeneralSearchCtrl', generalSearch.Ctrl)
  .component('generalSearch', generalSearch.Component)
  .controller('OpinionDetailsCtrl', opinionDetails.Ctrl)
  .component('opinionDetails', opinionDetails.Component)
  .controller('OpinionFullCtrl', opinionFull.Ctrl)
  .component('opinionFull', opinionFull.Component);
