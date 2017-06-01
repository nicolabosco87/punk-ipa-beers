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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJlZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMseUVBQXNFO0FBT3RFLElBQWEsaUJBQWlCO0lBTTFCLDJCQUFvQixjQUE4QjtRQUFsRCxpQkFVQztRQVZtQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMbEQsVUFBSyxHQUFHLGVBQWUsQ0FBQztRQUV4QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2Qsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBSXRCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFO2FBQ3pCLFNBQVMsQ0FDTixVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUMsQ0FDSixDQUFDO0lBRU4sQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxpQkFBaUI7SUFMN0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7S0FDekQsQ0FBQztxQ0FPc0MsZ0NBQWM7R0FOekMsaUJBQWlCLENBa0I3QjtBQWxCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHVua0FwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvcHVua2FwaS5zZXJ2aWNlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2JlZXItbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2JlZXItbGlzdC9iZWVyLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3BhZ2VzL2JlZXItbGlzdC9iZWVyLWxpc3QuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmVlckxpc3RDb21wb25lbnQge1xyXG4gICAgdGl0bGUgPSAnUHVua0lwYSBCZWVycyc7XHJcblxyXG4gICAgYmVlckxpc3QgPSBbXTtcclxuICAgIGJlZXJMaXN0UmV0cmlldmVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwdW5rQXBpU2VydmljZTogUHVua0FwaVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wdW5rQXBpU2VydmljZS5saXN0KClcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBiZWVycyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlZXJMaXN0ID0gYmVlcnM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlZXJMaXN0UmV0cmlldmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=