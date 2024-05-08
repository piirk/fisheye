class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        
        return fetch(this._url)
            .then(res => res.json())
            .catch(err => console.log('an error occurs', err))
    }
}

class PhotographersApi extends Api {
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return await this.get()
    }
}
