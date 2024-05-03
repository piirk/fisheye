/**
 * Classe : Photographer
 */

class Photographer {
    constructor(data) {
        this._id = data.id
        this._name = data.name
        this._portrait = data.portrait
        this._country = data.country
        this._city = data.city
        this._tagline = data.tagline
        this._price = data.price
    }
 
    get id() {
        return this._id
    }

    get name() {
        return this._name
    }
    
    get portrait() {
        return `assets/photographers/${this._portrait}`
    }

    get country() {
        return this._country
    }

    get city() {
        return this._city
    }

    get tagline() {
        return this._tagline
    }

    get price() {
        return this._price
    }
}