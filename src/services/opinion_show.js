export class OpinionShow {
  constructor($http) {
    const self = this;
    self.$http = $http;
    self.ENDPOINT = 'http://www.courtlistener.com/api/rest/v3/opinions/';
  }

  find(id) {
    const self = this;
    return self.$http.get(self.ENDPOINT + id);
  }

  
}
