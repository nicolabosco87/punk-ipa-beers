import { Component } from '@angular/core';
//import { PunkApiService } from '../../../../nativescript/shared/services/punkapi.service'
import { PunkApiService } from '../../../shared/services/punkapi.service'

@Component({
    templateUrl: './beer-list.component.html',
    styleUrls: ['./beer-list.component.css'],
    providers: [PunkApiService]
})
export class BeerListComponent {
    title = 'PunkIpa Beers';

    beerList = [];
    beerListRetrieved = false;

    constructor(private punkApiService: PunkApiService) {

        this.punkApiService.list()
        .subscribe(
            (beers) => {
                this.beerList = beers;
                this.beerListRetrieved = true;
            }
        );

    }



}
