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
    </div>
  </div>
  `
};
