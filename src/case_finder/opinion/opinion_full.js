export class Ctrl {

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
