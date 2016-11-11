export default ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/finder');

  $stateProvider
    .state('caseFinder', {
      url: '/finder',
      controller: ['OpinionFinder', function(OpinionFinder) {
        const vm = this;
        vm.select = $event => {
          console.log($event);
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
