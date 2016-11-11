export default ['$stateProvider', '$urlRouterProvider', function ($stateProvider) {
  $stateProvider
    .state('caseFinder', {
      url: '',
      template:
      `
      <search-bar></search-bar>
      `
    })
    .state('caseFinder.show', {
      url: '/show',
      template:
      `
      <case-text case='case'></case-text>
      `
    });
}];
