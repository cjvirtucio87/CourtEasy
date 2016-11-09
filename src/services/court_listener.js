import angular from 'angular';
import _ from 'lodash';

export class CourtListener {
  constructor($http) {
    this.$http = $http;
    this.SEARCH_URL = 'http://www.courtlistener.com/api/rest/v3/search/?=';
    this.DEFAULT_PARAMS = '&type=o&order_by=score+desc&stat_Precedential=on';
    this.data = {
      cached: []
    };
  }

  search(keys) {
    // const query = self.buildQuery(keys);
    const url = this.buildUrl(keys);
    console.log(url);
    // console.log(url);
    console.log(this.$http.get(url));
    // console.log(encodeURIComponent(keys));
      // .then(self.cacheResponse)
      // .catch(self.logError);
  }

  cacheResponse(response) {
    const cached = self.data.cached;
    angular.copy(response, cached);
    return cached;
  }

  buildUrl(keys) {
    const chained = _.chain(this.SEARCH_URL);
    return chained
            .add(encodeURIComponent(keys))
            .add(this.DEFAULT_PARAMS)
            .replace(/%20/g, '+')
            .value();
  }

  logError(reason) {
    console.log(reason);
  }

  get getCached() {
    return this.data.cached;
  }

  set addCached(value) {
    this.data.cached.push(value);
  }
}

CourtListener.$inject = ['$http'];
