class Image extends Media {
    constructor(data) {
        super(data)
        this._url = data.image
    }

    get url() {
        return this._url
    }

    generateTemplate() {
        return `<img class="card__media" src="assets/medias/${this._photographerId}/${this._url}" alt="${this._title} fait en ${new Date(this._date).getFullYear()}">`
    }

    generateTemplateLightBox() {
        return `<img class="lightbox__slide" src="assets/medias/${this._photographerId}/${this._url}" alt="${this._title}">`
    }
}   
