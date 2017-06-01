"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var punkapi_service_1 = require("../../shared/services/punkapi.service");
var BeerDetailComponent = (function () {
    function BeerDetailComponent(punkApiService, route) {
        this.punkApiService = punkApiService;
        this.route = route;
        this.beerListRetrieved = false;
    }
    BeerDetailComponent.prototype.loadDetails = function (id) {
        var _this = this;
        this.punkApiService.detail(id)
            .subscribe(function (beers) {
            _this.beerInfo = beers;
            _this.beerListRetrieved = true;
        });
    };
    BeerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.loadDetails(_this.id);
        });
    };
    BeerDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return BeerDetailComponent;
}());
BeerDetailComponent = __decorate([
    core_1.Component({
        selector: 'beer-detail',
        templateUrl: 'pages/beer-detail/beer-detail.component.html',
        styleUrls: ['pages/beer-detail/beer-detail.component.css'],
        providers: [punkapi_service_1.PunkApiService]
    }),
    __metadata("design:paramtypes", [punkapi_service_1.PunkApiService, router_1.ActivatedRoute])
], BeerDetailComponent);
exports.BeerDetailComponent = BeerDetailComponent;
