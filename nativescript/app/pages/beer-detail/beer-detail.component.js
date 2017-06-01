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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVlci1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmVlci1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUFpRDtBQUVqRCx5RUFBc0U7QUFTdEUsSUFBYSxtQkFBbUI7SUFPNUIsNkJBQW9CLGNBQThCLEVBQVUsS0FBcUI7UUFBN0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMakYsc0JBQWlCLEdBQVksS0FBSyxDQUFDO0lBS2lELENBQUM7SUFHckYseUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFBdEIsaUJBUUM7UUFQRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7YUFDekIsU0FBUyxDQUNOLFVBQUEsS0FBSztZQUNMLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3pDLEtBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7WUFDaEUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVMLDBCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSw4Q0FBOEM7UUFDM0QsU0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7UUFDMUQsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztLQUM5QixDQUFDO3FDQVFzQyxnQ0FBYyxFQUFpQix1QkFBYztHQVB4RSxtQkFBbUIsQ0ErQi9CO0FBL0JZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgUHVua0FwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvcHVua2FwaS5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBCZWVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9iZWVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdiZWVyLWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2JlZXItZGV0YWlsL2JlZXItZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydwYWdlcy9iZWVyLWRldGFpbC9iZWVyLWRldGFpbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6IFtQdW5rQXBpU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJlZXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgYmVlckxpc3RSZXRyaWV2ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGJlZXJJbmZvOiBCZWVyO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwdW5rQXBpU2VydmljZTogUHVua0FwaVNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxyXG5cclxuXHJcbiAgICBsb2FkRGV0YWlscyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wdW5rQXBpU2VydmljZS5kZXRhaWwoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBiZWVycyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlZXJJbmZvID0gYmVlcnM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlZXJMaXN0UmV0cmlldmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9ICtwYXJhbXNbJ2lkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgICAgICB0aGlzLmxvYWREZXRhaWxzKHRoaXMuaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==