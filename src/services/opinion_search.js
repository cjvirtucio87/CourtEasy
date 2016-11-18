"use strict";
var merge = require('lodash/merge');
var OpinionSearch = (function () {
    function OpinionSearch($http) {
        var self = this;
        self.$http = $http;
        self.ENDPOINT = 'https://www.courtlistener.com/api/rest/v3/search/';
        self.AUTH_TOKEN = 'Token e87ff33a69697d863a40d2eb0b4d7a2c34fd373e';
        self.DEFAULT_PARAMS = {
            type: 'o',
            order_by: 'score desc',
            stat_Precedential: 'on'
        };
    }
    OpinionSearch.prototype.search = function (keys) {
        var self = this;
        return self.$http.get(self.ENDPOINT, {
            params: self.paramify(keys)
        });
    };
    OpinionSearch.prototype.paramify = function (keys) {
        var self = this;
        return merge(self.DEFAULT_PARAMS, { q: keys.join('') });
    };
    OpinionSearch.$inject = ['$http'];
    return OpinionSearch;
}());
exports.OpinionSearch = OpinionSearch;
//# sourceMappingURL=opinion_search.js.map