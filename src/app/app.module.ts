import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutes, navigatableComponents } from './app.router';

import { BeerListComponent } from './pages/beer-list/beer-list.component'
import { BeerDetailComponent } from './pages/beer-detail/beer-detail.component'
import { AboutComponent } from './pages/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerDetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
