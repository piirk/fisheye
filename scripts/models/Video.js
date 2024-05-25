class Video extends Media {
    constructor(data) {
        super(data)
        this._url = data.video
    }

    get url() {
        return this._url
    }

    generateTemplate(counter) {
        return 'video'
    }
}
