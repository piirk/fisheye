class Video extends Media {
    constructor(data) {
        super(data)
        this._url = data.video
    }

    generateTemplate() {
        return `
            <a href="" alt="${this.title}" aria-label="Vidéo nommée ${this.title}">
                <video class="card__media" src="assets/medias/${this.photographerId}/${this.url}"></video>
            </a>
        `
    }

    get url() {
        return this._url
    }
}


