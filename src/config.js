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
        'case-finder-landing@': {
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
        'case-finder-landing-typing@': {
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
        }
      }
    })
    .state('caseFinder', {
      url: '/:id',
      views: {
        '@': {
          template:
          `<section class='row'>
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
          `
        },
        'case-finder-show@': {
          template:
          `<section class='row'>
            <div class='col-md'>
            </div>
            <div class='col-md-10 flex-md-middle'>
              <opinion-full opinion='$ctrl.opinion'></opinion-full>
            </div>
            <div class='col-md'>
            </div>
          </section>
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
