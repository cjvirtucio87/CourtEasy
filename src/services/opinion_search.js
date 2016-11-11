import merge from 'lodash/merge';

export class OpinionSearch {
  constructor($http) {
    const self = this;
    self.$http = $http;
    self.SEARCH_URL = 'http://www.courtlistener.com/api/rest/v3/search/?=';
    self.DEFAULT_PARAMS = {
      type: 'o',
      order_by: 'score desc',
      stat_Precedential: 'on'
    };
  }

  // *RATE LIMIT: 100 per day for anon. Need to build Rails API for auth and 5000 per hour.
  search(keys) {
    const self = this;
    const params = self.paramify(keys);
    return self.$http.get(self.SEARCH_URL, { params: params });
  }

  paramify(keys) {
    return merge(self.DEFAULT_PARAMS, {q: keys.join('')});
  }
}

OpinionSearch.$inject = ['$http'];
