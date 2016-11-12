export default ['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

  // HTTP
  $httpProvider.defaults.headers.common.Authorization = 'Token e87ff33a69697d863a40d2eb0b4d7a2c34fd373e';

  // Routing
  $urlRouterProvider.otherwise('/finder');
  $stateProvider
    .state('caseFinder', {
      url: '/finder',
      controller: ['OpinionFinder', function(OpinionFinder) {
        const vm = this;
        vm.select = $event => {
          OpinionFinder.find($event.id)
            .then(response => vm.case = response.data.results);
        };
      }],
      controllerAs: 'cfc',
      views: {
        'index@': {
          template:
          `
          <search-bar on-select='cfc.select($event)'></search-bar>
          `
        },
        'show@': {
          template:
          `
          <case-text case='cfc.case' ng-if='cfc.case'></case-text>
          `
        }
      }
    });
}];
