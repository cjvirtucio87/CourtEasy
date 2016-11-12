export class Ctrl {
  fullText(opinion) {
    this.onFulltext({ $event: angular.copy(opinion,{}) });
  }
}

export const Component = {
  controller: 'OpinionDetailsCtrl',
  bindings: {
    opinion: '<',
    onFulltext: '&'
  },
  template:
  `
  <div class='card'>
    <div class='card-block'>
      <p class='card-text'>{{$ctrl.opinion.caseName}} was decided by the {{$ctrl.opinion.court}}, and filed before it on {{$ctrl.opinion.dateFiled | date}}</p>
      <p class='card-text'>Here's a snippet from the case text: </p>
      <p class='card-text' ng-style="{cursor: 'pointer'}" ng-click='$ctrl.fullText($ctrl.opinion)' ng-bind-html='$ctrl.opinion.snippet'></p>
    </div>
  </div>
  `
};
