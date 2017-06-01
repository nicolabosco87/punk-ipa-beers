import { Component } from '@angular/core';
import { PunkApiService } from '../../shared/services/punkapi.service'

@Component({
    selector: 'beer-list',
    templateUrl: 'pages/beer-list/beer-list.component.html',
    styleUrls: ['pages/beer-list/beer-list.component.css'],
})
export class BeerListComponent {
    title = 'PunkIpa Beers';

    beerList = [];
    beerListRetrieved = false;

    constructor(private punkApiService: PunkApiService) {

        this.punkApiService.list()
        .subscribe(
            beers => {
                this.beerList = beers;
                this.beerListRetrieved = true;
            }
        );

    }

}
