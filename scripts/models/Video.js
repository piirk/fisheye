class Video extends Media {
    constructor(data) {
        super(data);
        this._url = data.video;
    }

    get url() {
        return this._url;
    }

    generateTemplateThumbnail() {
        return `<video class="card__media" src="assets/medias/${this._photographerId}/${this._url}" alt="${this._title} fait en ${new Date(this._date).getFullYear()}"></video>`;
    }

    generateTemplateLightBox() {
        return `
        <video class="lightbox__slide" alt="${this._title}" controls>
            <source src="assets/medias/${this._photographerId}/${this._url}" type="video/mp4">
            Votre naviguateur ne peut pas lire la vidéo.
        </video>
        `;
    }
}
