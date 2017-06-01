"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.extractData = function (res) {
        var body = res.json();
        //return body.data || {};
        console.log(body);
        return body;
    };
    BaseService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map