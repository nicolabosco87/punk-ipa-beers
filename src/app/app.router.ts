import { RouterModule, Routes } from '@angular/router';

import { BeerListComponent } from './pages/beer-list/beer-list.component'
import { BeerDetailComponent } from './pages/beer-detail/beer-detail.component'
import { AboutComponent } from './pages/about/about.component'


export const AppRoutes: Routes = [
    { path: '', component: BeerListComponent},
    { path: 'beers', component: BeerListComponent},
    { path: 'beers/:id', component: BeerDetailComponent},
    { path: 'about', component: AboutComponent},
]


export const navigatableComponents = [
    BeerListComponent,
    AboutComponent,
    BeerDetailComponent
];


