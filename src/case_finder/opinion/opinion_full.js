// import $ from 'jquery';

export class Ctrl {
  constructor($element) {
    // Scroll to full text upon loading.
    $('body').animate({
      scrollTop: $($element).offset().top
    }, 'slow');
  }
}

Ctrl.$inject = ['$element'];

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
