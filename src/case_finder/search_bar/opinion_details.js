export class Ctrl {

}

export const Component = {
  controller: 'OpinionDetailsCtrl',
  bindings: {
    opinion: '<'
  },
  template:
  `
  <div class='card'>
    <div class='card-block'>
      <p class='card-text'>{{$ctrl.opinion.caseName}} was decided by the {{$ctrl.opinion.court}}, and filed before it on {{$ctrl.opinion.dateFiled | date}}</p>
      <p>Here's a snippet from the case text: </p>
      <p ng-bind-html='$ctrl.opinion.snippet'></p>
    </div>
  </div>
  `
};
