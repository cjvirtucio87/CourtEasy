export default ['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

  // HTTP
  $httpProvider.defaults.headers.common.Authorization = 'Token e87ff33a69697d863a40d2eb0b4d7a2c34fd373e';

  // Routing
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('landing', {
      url: '/',
      views: {
        '@': {
          template:
          `
          <section class='row' id='landing-start'>
            <div class='col-md'>
            </div>
            <div class='col-md-6 flex-md-middle'>
              <h1 class='display-1'>Court Easy</h1>
              <p>Your central repository for all things <strong>legal</strong></p>
            </div>
            <div class='col-md'>
            </div>
          </section>
          `
        },
        '1@': {
          template:
          `
          <section class='row'>
            <div class='col-md'>
            </div>
            <div class='col-md-6 flex-md-middle'>
              <h1 class='display-4'>Case Finder</h3>
              <p>Deadline got you down? We make legal research a breeze with <strong>Case Finder</strong>, powered by the <strong>The Free Law Project</strong>.</p>
            </div>
            <div class='col-md'>
            </div>
          </section>
          `
        },
        '2@': {
          template:
          `
          <section class='row' id='landing-casefinder-typing'>
            <div class='col-md'>
            </div>
            <div class='col-md-6 flex-md-middle'>
              <p>This app interfaces with the <strong>Court Listener API</strong> to quickly serve the data you need to make your persuasive arguments.</p>
            </div>
            <div class='col-md'>
            </div>
          </section>
          `
        },
        '3@': {
          controller: ['$state', function($state) {
            const vm = this;

            vm.toCaseFinder = function () {
              $state.go('caseFinder');
            };
          }],
          controllerAs: '$ctrl',
          template:
          `
          <section class='row'>
            <div class='col-md'>
            </div>
            <div class='col-md-6 flex-md-middle'>
              <p>Try it out today!</p>
              <button ng-click='$ctrl.toCaseFinder()' class='btn btn-outline-primary btn-lg'>DEMO</button>
            </div>
            <div class='col-md'>
            </div>
          </section>
          `
        }
      }
    })
    .state('caseFinder', {
      url: '/finder',
      views: {
        '@': {
          // Need to figure out how to not let this view load until you click on the previewed case.
          controller: ['$rootScope', function($rootScope) {
            const vm = this;

            vm.readyOpinion = function (opinion) {
              console.log(opinion);
              $rootScope.$emit('opinion.ready', opinion);
            };
          }],
          controllerAs: 'searchCtrl',
          template:
          `<section class='row'>
            <div class='col-md'>
            </div>
            <div class='col-md-6 flex-md-middle'>
              <h1 class='display-4'>Case Finder</h3>
              <p class='lead'>Look up a case</p>
              <search-bar on-select='searchCtrl.readyOpinion($event)'></search-bar>
            </div>
            <div class='col-md'>
            </div>
          </section>
          `
        },
        '1@': {
          controller: ['$rootScope', 'OpinionShow', function($rootScope, OpinionShow) {
            const vm = this;

            function _storeFullText(ev, arg) {
              OpinionShow.find(arg.id).then(html => vm.opinion = html);
            }

            $rootScope.$on('opinion.ready', _storeFullText);
          }],
          controllerAs: 'opinionCtrl',
          template:
          `
          <section ng-if='opinionCtrl.opinion' class='row'>
            <div class='col-md-12'>
              <opinion-full opinion='opinionCtrl.opinion'></opinion-full>
            </div>
          </section>
          `
        }
      }
    });
}];
