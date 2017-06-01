"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Beer = (function () {
    function Beer(id, name, tagline, description, image_url, abv, ibu, ebc) {
        this.id = id;
        this.name = name;
        this.tagline = tagline;
        this.description = description;
        this.image_url = image_url;
        this.abv = abv;
        this.ibu = ibu;
        this.ebc = ebc;
    }
    return Beer;
}());
exports.Beer = Beer;
