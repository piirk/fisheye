/**
 * @class Image
 * @description Classe pour générer un objet image
 * @extends Media
 */
class Image extends Media {
    /**
     * Create an image
     * @param {Object} data - data from the API
     */
    constructor(data) {
        super(data);
        this._url = data.image;
    }

    get url() {
        return this._url;
    }

    /**
     * Generate HTML template for an image
     * @returns {string} - HTML template
     */
    generateTemplateThumbnail() {
        return `<img class="card__media" src="assets/medias/${this._photographerId}/thumbnails/${this._url}" alt="${this._title} fait en ${new Date(this._date).getFullYear()}">`;
    }

    /**
     * Generate HTML template for an image in lightbox
     * @returns {string} - HTML template
     */
    generateTemplateLightbox() {
        return `<img class="lightbox__slide" src="assets/medias/${this._photographerId}/${this._url}" alt="${this._title}">`;
    }
}   
