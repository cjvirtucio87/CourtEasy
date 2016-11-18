"use strict";
var OpinionShow = (function () {
    function OpinionShow($http) {
        var self = this;
        self.$http = $http;
        self.ENDPOINT = 'https://www.courtlistener.com/api/rest/v3/opinions/';
    }
    OpinionShow.prototype.find = function (id) {
        var self = this;
        return self.$http.get(self.ENDPOINT + id + '/')
            .then(function (response) { return response.data.html_lawbox; })
            .catch(self.logError);
    };
    OpinionShow.prototype.logError = function (reason) {
        console.log(reason);
    };
    return OpinionShow;
}());
exports.OpinionShow = OpinionShow;
//# sourceMappingURL=opinion_show.js.map