export default ['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

  // HTTP
  $httpProvider.defaults.headers.common.Authorization = 'Token e87ff33a69697d863a40d2eb0b4d7a2c34fd373e';

  // Routing
  $urlRouterProvider.otherwise('/finder');
  $stateProvider
    .state('caseFinder', {
      url: '/finder',
      controller: ['OpinionShow', function(OpinionShow) {
        // Can't pass binding to view template.
      }],
      controllerAs: 'cfc',
      views: {
        'index@': {
          template:
          `
          <search-bar></search-bar>
          `
        },
        'show@': {
          template:
          `
          <opinion-full class='opinion-full' opinion='cfc.opinion' ng-if='cfc.opinion'></opinion-full>
          `
        }
      }
    });
}];
