class Image extends Media {
    constructor(data) {
        super(data)
        this._url = data.image
    }

    generateTemplate() {
        return `
            <a href="" alt="${this.title}" aria-label="Image nommée ${this.title}">
                <img class="card__media" src="assets/medias/${this.photographerId}/${this.url}" alt="'${this.title} fait en ${new Date(this.date).getFullYear()}'">
            </a>
        `
    }

    get url() {
        return this._url
    }
}