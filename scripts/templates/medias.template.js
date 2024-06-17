/**
 * @class MediasTemplate
 * @description Classe permettant de générer le template des médias
 */
class MediasTemplate {
    /**
     * @param {Array<Media>} medias - liste des médias
     */
    constructor(medias) {
        this._medias = medias;
    }

    get medias() {
        return this._medias;
    }

    /**
     * Création de la liste des médias du photographe
     */
    createPhotographerThumbnails() {
        let thumbnails = '';

        this.medias.forEach(media => {
            thumbnails += `
                <figure class="card">
                    <a href="javascript:;" tabindex="0" title="Ouvrir le média ${media.title} dans la light box" data-type="media" data-id=${media.id}>
                        ${media.generateTemplateThumbnail()}
                    </a>
                    <figcaption class="card__content">
                        <h3 class="card__text">${media.title}</h3>
                        <button class="card__likes" aria-label="${media.likes} likes pour ${media.title}. Mettre un like au média" aria-pressed="false">
                            <span class="likes-count">${media.likes}</span> <i class="fa-regular fa-heart"></i>
                        </button>
                    </figcaption>
                </figure>
            `;
        });

        document.querySelector('.medias-container').innerHTML = thumbnails;
    }
}
