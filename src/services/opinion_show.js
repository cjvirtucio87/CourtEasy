export class OpinionShow {
  constructor($http) {
    const self = this;
    self.$http = $http;
    self.ENDPOINT = 'https://www.courtlistener.com/api/rest/v3/opinions/';
  }

  find(id) {
    const self = this;
    return self.$http.get(self.ENDPOINT + id + '/')
      .then(response => response.data.html_lawbox)
      .catch(self._logError);
  }

  _logError(reason) {
    console.log(reason);
  }
}
