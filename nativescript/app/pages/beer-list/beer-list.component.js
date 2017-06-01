"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var punkapi_service_1 = require("../../shared/services/punkapi.service");
var BeerListComponent = (function () {
    function BeerListComponent(punkApiService) {
        var _this = this;
        this.punkApiService = punkApiService;
        this.title = 'PunkIpa Beers';
        this.beerList = [];
        this.beerListRetrieved = false;
        this.punkApiService.list()
            .subscribe(function (beers) {
            _this.beerList = beers;
            _this.beerListRetrieved = true;
        });
    }
    return BeerListComponent;
}());
BeerListComponent = __decorate([
    core_1.Component({
        selector: 'beer-list',
        templateUrl: 'pages/beer-list/beer-list.component.html',
        styleUrls: ['pages/beer-list/beer-list.component.css'],
    }),
    __metadata("design:paramtypes", [punkapi_service_1.PunkApiService])
], BeerListComponent);
exports.BeerListComponent = BeerListComponent;
