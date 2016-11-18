import Promise from 'bluebird';

export class Ctrl {
  private OpinionSearch;
  private $state;
  private searchResults: any[];
  private opinion;
  private onSelect: Function;

  static $inject = ['OpinionSearch', '$state'];

  constructor (OpinionSearch, $state) {
    this.OpinionSearch = OpinionSearch;
    this.$state = $state;
    this.searchResults = [];
  }

  search(keys) {
    const self = this;
    const present = self.present.bind(self);
    self.resetDetails();
    return self.OpinionSearch
      .search(keys)
      .then(self.present(self));
  }

  select(item) {
    this.opinion = item;
  }

  fullText(opinion) {
    this.onSelect({$event: opinion});
  }

  private present(self): any {
    return response => { return angular.copy(response.data.results, self.searchResults); };
  }

  private resetDetails() {
    this.opinion = undefined;
  }
}

export const Component = {
  controller: 'SearchBarCtrl',
  bindings: {
    onSelect: '&'
  },
  template:
  `
  <div class='row'>
    <div class='col-md'>
    </div>
    <div class='col-md-6 flex-md-middle'>
      <general-search results='$ctrl.searchResults' on-select='$ctrl.select($event)' on-type='$ctrl.search($event)'></general-search>
    </div>
    <div class='col-md'>
    </div>
  </div>
  <div class='row'>
    <div class='col-md'>
      <opinion-details ng-show='$ctrl.opinion' on-fulltext='$ctrl.fullText($event)' opinion='$ctrl.opinion'></opinion-details>
    </div>
  </div>
  `
};
