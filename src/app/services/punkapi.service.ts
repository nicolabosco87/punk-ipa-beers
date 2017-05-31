import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Beer } from '../models/beer'


const apiUrl = 'https://api.punkapi.com/v2/';

@Injectable()
export class PunkApiService {



    constructor(private http:Http) {}


    list(params: Object = {}) {

        let beersUrl = apiUrl + 'beers/?';

        Object.keys(params).map((key, index) => {
            beersUrl += key + '=' + params[key] + '&';
        });

        return this.http.get(beersUrl)
            .map(response => { return response.json() })
            .map(data => {
                let beerList = [];
                data.forEach(b => {
                    beerList.push(new Beer(b.id, b.name, b.tagline, b.description, b.image_url, b.abv, b.ibu, b.ebc));
                })

                return beerList;
            })
            .catch(this.handleErrors);
    }


    detail(id: number) {

        let beersUrl = apiUrl + 'beers/' + id ;

        return this.http.get(beersUrl)
            .map(response => { return response.json() })
            .map(b => {
                b = b[0];
                return new Beer(b.id, b.name, b.tagline, b.description, b.image_url, b.abv, b.ibu, b.ebc);
            })
            .catch(this.handleErrors);
    }


    handleErrors(error) {
        return Observable.throw(JSON.stringify(error.json()))
    }



}