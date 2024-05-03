/**
 * Classe : Media
 */
class Media {
    /**
     * 
     * @param {Object} data 
     * @param {String} url 
     * @param {String} type 
     */
    constructor(data, url, type) {
        this._id = data.id
        this._photographerId = data.photographerId
        this._url = url
        this._type = type
        this._title = data.title
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
    }

    get id() {
        return this._id
    }

    get photographerId() {
        return this._photographerId
    }

    get url() {
        return this._url
    }

    get type() {
        return this._type
    }

    get title() {
        return this._title
    }

    get likes() {
        return this._likes
    }

    get date() {
        return this._date
    }

    get price() {
        return this._price
    }
}
