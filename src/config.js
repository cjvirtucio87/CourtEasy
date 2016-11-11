export default ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/finder');

  $stateProvider
    .state('caseFinder', {
      url: '/finder',
      template:
      `
      <search-bar></search-bar>
      `
    })
    .state('caseFinder.show', {
      url: '/finder/:id',
      template:
      `
      <case-text></case-text>
      `,
      resolve: {
        case: ['OpinionShow', '$stateParams', function(OpinionShow, $stateParams) {
          console.log($stateParams.id);
          return OpinionShow.find($stateParams);
        }]
      }
    });
}];
