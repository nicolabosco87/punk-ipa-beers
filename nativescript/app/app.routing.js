"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var beer_list_component_1 = require("./pages/beer-list/beer-list.component");
var beer_detail_component_1 = require("./pages/beer-detail/beer-detail.component");
var routes = [
    { path: "", component: beer_list_component_1.BeerListComponent },
    { path: "beers", component: beer_list_component_1.BeerListComponent },
    { path: "beers/:id", component: beer_detail_component_1.BeerDetailComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsNkVBQTBFO0FBQzFFLG1GQUFnRjtBQUloRixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUU7SUFDL0MsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtDQUN4RCxDQUFDO0FBTUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3RDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQmVlckxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9iZWVyLWxpc3QvYmVlci1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCZWVyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvYmVlci1kZXRhaWwvYmVlci1kZXRhaWwuY29tcG9uZW50XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEJlZXJMaXN0Q29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiYmVlcnNcIiwgY29tcG9uZW50OiBCZWVyTGlzdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImJlZXJzLzppZFwiLCBjb21wb25lbnQ6IEJlZXJEZXRhaWxDb21wb25lbnQgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=