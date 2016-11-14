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
              <div class='col-md'>
              </div>
              <div class='col-md-6 flex-md-middle'>
                <h1 class='display-1'>Court Easy</h1>
                <p class='lead'>Your central repository for all things <strong>legal</strong></p>
              </div>
              <div class='col-md'>
              </div>
            </section>
            <section class='row'>
              <div class='col-md'>
              </div>
              <div class='col-md-6 flex-md-middle'>
                <h1 class='display-4'>Case Finder</h3>
                <p class='lead'>Look up a case</p>
                <search-bar></search-bar>
              </div>
              <div class='col-md'>
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
