/**
 * @class Video
 * @description Classe pour générer un objet vidéo
 * @extends Media
 */
class Video extends Media {
    /**
     * Créer une vidéo
     * @param {Object} data - données de l'API
     */
    constructor(data) {
        super(data);
        this._url = data.video;
    }

    get url() {
        return this._url;
    }

    /**
     * Generate HTML template for the video thumbnail
     * @returns {string} - HTML template for the video thumbnail
     */
    generateTemplateThumbnail() {
        return `<video class="card__media" src="assets/medias/${this._photographerId}/${this._url}" alt="${this._title} fait en ${new Date(this._date).getFullYear()}"></video>`;
    }

    /**
     * Generate HTML template for the video lightbox
     * @returns {string} - HTML template for the video lightbox
     */
    generateTemplateLightbox() {
        return `
        <video class="lightbox__slide" alt="${this._title}" controls>
            <source src="assets/medias/${this._photographerId}/${this._url}" type="video/mp4">
            Votre naviguateur ne peut pas lire la vidéo.
        </video>
        `;
    }
}
