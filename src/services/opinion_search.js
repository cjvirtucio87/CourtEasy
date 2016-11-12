import merge from 'lodash/merge';

export class OpinionSearch {
  constructor($http) {
    const self = this;
    self.$http = $http;
    self.ENDPOINT = 'http://www.courtlistener.com/api/rest/v3/search/?';
    self.AUTH_TOKEN = 'Token e87ff33a69697d863a40d2eb0b4d7a2c34fd373e';
    self.DEFAULT_PARAMS = {
      type: 'o',
      order_by: 'score desc',
      stat_Precedential: 'on'
    };
  }

  search(keys) {
    const self = this;
    return self.$http.get(self.ENDPOINT, {
      headers: {
        'Content-Type': 'text/plain',
        'Authorization': self.AUTH_TOKEN,
        'Accept': 'application/json;odata=verbose'
      },
      params: self.paramify(keys)
    });
  }

  paramify(keys) {
    return merge(self.DEFAULT_PARAMS, { q: keys.join('') });
  }

}

OpinionSearch.$inject = ['$http'];
