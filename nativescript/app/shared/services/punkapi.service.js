"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var beer_1 = require("../models/beer");
var apiUrl = 'https://api.punkapi.com/v2/';
var PunkApiService = (function () {
    function PunkApiService(http) {
        this.http = http;
    }
    PunkApiService.prototype.list = function (params) {
        if (params === void 0) { params = {}; }
        var beersUrl = apiUrl + 'beers/?';
        Object.keys(params).map(function (key, index) {
            beersUrl += key + '=' + params[key] + '&';
        });
        return this.http.get(beersUrl)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            var beerList = [];
            data.forEach(function (b) {
                beerList.push(new beer_1.Beer(b.id, b.name, b.tagline, b.description, b.image_url, b.abv, b.ibu, b.ebc));
            });
            return beerList;
        })
            .catch(this.handleErrors);
    };
    PunkApiService.prototype.detail = function (id) {
        var beersUrl = apiUrl + 'beers/' + id;
        return this.http.get(beersUrl)
            .map(function (response) { return response.json(); })
            .map(function (b) {
            b = b[0];
            return new beer_1.Beer(b.id, b.name, b.tagline, b.description, b.image_url, b.abv, b.ibu, b.ebc);
        })
            .catch(this.handleErrors);
    };
    PunkApiService.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(JSON.stringify(error.json()));
    };
    return PunkApiService;
}());
PunkApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PunkApiService);
exports.PunkApiService = PunkApiService;
