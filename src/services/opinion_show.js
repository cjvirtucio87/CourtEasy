export class OpinionShow {
  constructor($http) {
    const self = this;
    self.$http = $http;
    self.ENDPOINT = 'http://www.courtlistener.com/api/rest/v3/opinions/';
    self.AUTH_TOKEN = 'e87ff33a69697d863a40d2eb0b4d7a2c34fd373e';
  }

  find(id) {
    const self = this;
    return self.$http.get(self.ENDPOINT + id, {
      params: { Authentication: self.AUTH_TOKEN}
    });
  }
}
