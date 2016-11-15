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
    <div ng-if='$ctrl.opinion' class='card-block opinion-animate'>
      <p class='card-text'><strong>{{$ctrl.opinion.caseName}}</strong> was decided by the {{$ctrl.opinion.court}}, and filed before it on <strong>{{$ctrl.opinion.dateFiled | date}}</strong></p>
      <p class='card-text'>Here's an excerpt from the text: </p>
      <blockquote class='blockquote'>
        <p class='card-text' ng-style="{cursor: 'pointer'}" ng-click='$ctrl.fullText($ctrl.opinion)' ng-bind-html='$ctrl.opinion.snippet'></p>
      </blockquote>
    </div>
  </div>
  `
};
