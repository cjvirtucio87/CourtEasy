import Promise from 'bluebird';

export class OpinionShow {
  private ENDPOINT: string;
  private $http;

  constructor($http) {
    const self = this;
    self.$http = $http;
    self.ENDPOINT = 'https://www.courtlistener.com/api/rest/v3/opinions/';
  }

  find(id: number): Promise<any> {
    const self = this;
    return self.$http.get(self.ENDPOINT + id + '/')
      .then(response => response.data.html_lawbox)
      .catch(self.logError);
  }

  private logError(reason): void {
    console.log(reason);
  }
}