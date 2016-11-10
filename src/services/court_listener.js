import angular from 'angular';
import _ from 'lodash';

export class CourtListener {
  constructor($http) {
    const self = this;
    self.$http = $http;
    self.SEARCH_URL = 'http://www.courtlistener.com/api/rest/v3/search/?=';
    self.DEFAULT_PARAMS = {
      type: 'o',
      order_by: 'score desc',
      stat_Precedential: 'on'
    };
    self.data = {
      cached: []
    };
  }

  // *RATE LIMIT: 100 per day for anon. Need to build Rails API for auth and 5000 per hour.
  search(keys) {
    const self = this;
    const params = self.paramify(keys);
    return self.$http.get(self.SEARCH_URL, { params: params })
      .then(self.cacheResponse(self))
      .catch(self.logError);
  }

  cacheResponse(ctrl) {
    return response => {
      const cached = ctrl.data.cached;
      angular.copy(response.data.results, cached);
      return cached;
    };
  }

  paramify(keys) {
    return _.merge(self.DEFAULT_PARAMS, {q: keys.join('')});
  }

  logError(reason) {
    throw new Error(reason);
  }

  get getCached() {
    return this.data.cached;
  }
}

CourtListener.$inject = ['$http'];
