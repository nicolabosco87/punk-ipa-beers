import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { BeerListComponent } from "./pages/beer-list/beer-list.component";
import { BeerDetailComponent } from "./pages/beer-detail/beer-detail.component";



const routes: Routes = [
    { path: "", component: BeerListComponent },
    { path: "beers", component: BeerListComponent },
    { path: "beers/:id", component: BeerDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }