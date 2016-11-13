export default ['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

  // HTTP
  $httpProvider.defaults.headers.common.Authorization = 'Token e87ff33a69697d863a40d2eb0b4d7a2c34fd373e';

  // Routing
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('caseFinder', {
      abstract: true
    })
    .state('caseFinder.index', {
      url: '/',
      views: {
        '@': {
          template:
          `
          <div class='container'>
            <div class='row'>
              <div class='col-xs'>
                Col 1 of 2
              </div>
              <div class='col-xs'>
                Col 1 of 2
              </div>
            </div>
          </div>
          `
        }
      }
    })
    .state('caseFinder.show', {
      url: '/:id',
      views: {
        '@': {
          template:
          `
          <opinion-full opinion='$ctrl.opinion'></opinion-full>
          `,
          controller: ['opinion', function(opinion) {
            this.opinion = opinion;
          }],
          controllerAs: '$ctrl',
          resolve: {
            opinion: ['OpinionShow', '$stateParams', function(OpinionShow, $stateParams) {
              return OpinionShow.find($stateParams.id);
            }]
          }
        }
      }
    });
}];
