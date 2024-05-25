class Image extends Media {
    constructor(data) {
        super(data)
        this._url = data.image
    }

    get url() {
        return this._url
    }

    generateTemplate() {
        return 'img'
    }
}
