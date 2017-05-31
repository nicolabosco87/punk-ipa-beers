import { RouterModule, Routes } from '@angular/router';

import { BeerListComponent } from './pages/beer-list/beer-list.component'
import { AboutComponent } from './pages/about/about.component'


export const AppRoutes: Routes = [
    { path: '', component: BeerListComponent},
    { path: 'about', component: AboutComponent},
]


export const navigatableComponents = [
    BeerListComponent,
    AboutComponent
];


