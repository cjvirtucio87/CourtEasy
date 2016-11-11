export class Ctrl {
  constructor() {
  }
}

export const Component = {
  controller: 'CaseTextCtrl',
  bindings: {
    case: '<'
  },
  template:
  `
  <p>{{$ctrl.case}}</p>
  `
};
