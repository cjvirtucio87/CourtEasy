const $ = require('jquery');

export class Ctrl {

  static $inject = ['$element'];

  constructor($element) {
    // Scroll to full text upon loading.
    $('body').animate({
      scrollTop: $($element).offset().top
    }, 'slow');
  }
}

export const Component = {
  controller: 'OpinionFullCtrl',
  bindings: {
    opinion: '<'
  },
  template:
  `
  <div class='card'>
    <p class='card-text' ng-bind-html='$ctrl.opinion'></p>
  </div>
  `
};
