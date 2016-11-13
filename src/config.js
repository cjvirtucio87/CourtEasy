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
          <div class="container-fluid">
            <section class='row' id='landing'>
              <div class='col-xs'>
              </div>
              <div class='col-xs flex-xs-middle'>
                <h1>Court Easy</h1>
              </div>
              <div class='col-xs'>
              </div>
            </section>
            <section class='row'>
              <div class='col-xs'>
              </div>
              <div class='col-xs flex-xs-middle'>
                <h1>Look up a Case</h1>
                <search-bar></search-bar>
              </div>
              <div class='col-xs'>
              </div>
            </section>
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
