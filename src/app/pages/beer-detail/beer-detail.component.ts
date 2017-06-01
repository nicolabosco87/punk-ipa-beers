import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { PunkApiService } from '../../../../nativescript/shared/services/punkapi.service'
//import { Beer } from '../../../../nativescript/shared/models/beer';

import { PunkApiService } from '../../../shared/services/punkapi.service'
import { Beer } from '../../../shared/models/beer'

@Component({
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.css'],
    providers: [PunkApiService]
})
export class BeerDetailComponent implements OnInit, OnDestroy {

    beerListRetrieved: boolean = false;
    beerInfo: Beer;
    id: number;
    private sub: any;

    constructor(private punkApiService: PunkApiService, private route: ActivatedRoute) {}


    loadDetails(id: number) {
        this.punkApiService.detail(id)
            .subscribe(
            (beers: Beer) => {
                this.beerInfo = beers;
                this.beerListRetrieved = true;


                   console.log(this.beerInfo);
            }
        );
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            console.log(params);
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.loadDetails(this.id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
