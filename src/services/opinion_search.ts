import Promise from 'bluebird';
const merge = require('lodash/merge');

export class OpinionSearch {
  private ENDPOINT: string;
  private AUTH_TOKEN: string;
  private DEFAULT_PARAMS;
  private $http;

  static $inject = ['$http'];

  constructor($http) {
    const self = this;
    self.$http = $http;
    self.ENDPOINT = 'https://www.courtlistener.com/api/rest/v3/search/';
    self.AUTH_TOKEN = 'Token e87ff33a69697d863a40d2eb0b4d7a2c34fd373e';
    self.DEFAULT_PARAMS = {
      type: 'o',
      order_by: 'score desc',
      stat_Precedential: 'on'
    };
  }

  search(keys: string[]): Promise<any> {
    const self = this;
    return self.$http.get(self.ENDPOINT, {
      params: self.paramify(keys)
    });
  }

  paramify(keys: string[]): string {
    const self = this;
    return merge(self.DEFAULT_PARAMS, { q: keys.join('') });
  }

}