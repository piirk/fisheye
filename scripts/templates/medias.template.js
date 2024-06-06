class MediasTemplate {
    constructor(medias) {
        this._medias = medias;
    }

    get medias() {
        return this._medias;
    }

    createPhotographerThumbnails() {
        let thumbnails = '';

        this.medias.forEach((media, index) => {
            thumbnails += `
                <figure class="card">
                    <a href="javascript:;" onclick="lightBoxManager.open(this);lightBoxManager.currentSlide(${index + 1})" tabindex="0" title="Ouvrir le média ${media.title} dans la light box">
                        ${media.generateTemplateThumbnail()}
                    </a>
                    <figcaption class="card__content">
                        <h3 class="card__text">${media.title}</h3>
                        <button class="card__likes" title="Mettre un like au média ${media.title}" aria-pressed="false">
                            <span class="likes-count">${media.likes}</span> <i class="fa-regular fa-heart"></i>
                        </button>
                    </figcaption>
                </figure>
            `;
        });

        document.querySelector('.medias-container').innerHTML = thumbnails;
    }

    createLightBoxMedias() {
        let lightBoxContent = '';

        this._medias.forEach(media => {
            lightBoxContent += `
                <div class="mySlides hide">
                    ${media.generateTemplateLightBox()}
                </div>
            `;
        });

        lightBoxContent += `
            <button class="lightbox__prev" onclick="lightBoxManager.plusSlides(-1)">&#10094;</button>
            <button class="lightbox__next" onclick="lightBoxManager.plusSlides(1)">&#10095;</button>

            <div class="lightbox__caption-container">
                <p id="lightBoxCaption"></p>
            </div>
        `;

        document.querySelector('.lightbox__content').innerHTML = lightBoxContent;
    }
}
