"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
        // HTTP
        $httpProvider.defaults.headers.common.Authorization = 'Token e87ff33a69697d863a40d2eb0b4d7a2c34fd373e';
        // Routing
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('landing', {
            url: '/',
            views: {
                '@': {
                    template: "\n          <section class='row' id='landing-start'>\n            <div class='col-md'>\n            </div>\n            <div class='col-md-6 flex-md-middle'>\n              <h1 class='display-1'>Court Easy</h1>\n              <p>Your central repository for all things <strong>legal</strong></p>\n            </div>\n            <div class='col-md'>\n            </div>\n          </section>\n          "
                },
                '1@': {
                    template: "\n          <section class='row'>\n            <div class='col-md'>\n            </div>\n            <div class='col-md-6 flex-md-middle'>\n              <h1 class='display-4'>Case Finder</h3>\n              <p>Deadline got you down? We make legal research a breeze with <strong>Case Finder</strong>, powered by the <strong>The Free Law Project</strong>.</p>\n            </div>\n            <div class='col-md'>\n            </div>\n          </section>\n          "
                },
                '2@': {
                    template: "\n          <section class='row' id='landing-casefinder-typing'>\n            <div class='col-md'>\n            </div>\n            <div class='col-md-6 flex-md-middle'>\n              <p>This app interfaces with the <strong>Court Listener API</strong> to quickly serve the data you need to make your persuasive arguments.</p>\n            </div>\n            <div class='col-md'>\n            </div>\n          </section>\n          "
                },
                '3@': {
                    controller: ['$state', function ($state) {
                            var vm = this;
                            vm.toCaseFinder = function () {
                                $state.go('caseFinder');
                            };
                        }],
                    controllerAs: '$ctrl',
                    template: "\n          <section class='row'>\n            <div class='col-md'>\n            </div>\n            <div class='col-md-6 flex-md-middle'>\n              <p>Try it out today!</p>\n              <button ng-click='$ctrl.toCaseFinder()' class='btn btn-outline-primary btn-lg'>DEMO</button>\n            </div>\n            <div class='col-md'>\n            </div>\n          </section>\n          "
                }
            }
        })
            .state('caseFinder', {
            url: '/finder',
            views: {
                '@': {
                    // Need to figure out how to not let this view load until you click on the previewed case.
                    controller: ['$rootScope', function ($rootScope) {
                            var vm = this;
                            vm.readyOpinion = function (opinion) {
                                $rootScope.$emit('opinion.ready', opinion);
                            };
                        }],
                    controllerAs: 'searchCtrl',
                    template: "<section class='row'>\n            <div class='col-md'>\n            </div>\n            <div class='col-md-6 flex-md-middle'>\n              <h1 class='display-4'>Case Finder</h3>\n              <p class='lead'>Look up a case</p>\n              <search-bar on-select='searchCtrl.readyOpinion($event)'></search-bar>\n            </div>\n            <div class='col-md'>\n            </div>\n          </section>\n          "
                },
                '1@': {
                    controller: ['$rootScope', 'OpinionShow', function ($rootScope, OpinionShow) {
                            var vm = this;
                            function _storeFullText(ev, arg) {
                                OpinionShow.find(arg.id).then(function (html) { return vm.opinion = html; });
                            }
                            $rootScope.$on('opinion.ready', _storeFullText);
                        }],
                    controllerAs: 'opinionCtrl',
                    template: "\n          <section ng-if='opinionCtrl.opinion' class='row'>\n            <div class='col-md-12'>\n              <opinion-full opinion='opinionCtrl.opinion'></opinion-full>\n            </div>\n          </section>\n          "
                }
            }
        });
    }];
//# sourceMappingURL=config.js.map