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
