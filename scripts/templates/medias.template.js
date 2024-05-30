class MediasTemplate {
    constructor(medias) {
        this._medias = medias
    }

    get medias() {
        return this._medias
    }

    createPhotographerMedias() {
        let mediaCards = ""
        let count = 0

        this.medias.forEach(media => {
            const { photographerId, title, url, likes, date } = media

            const mediaType = media.generateTemplate()
            count++

            mediaCards += `
                <figure class="card">
                    <a href="javascript:;" onclick="openLightBox(this);currentSlide(${count})" tabindex="0" title="Ouvrir le média ${title} dans la light box">
                        ${mediaType}
                    </a>
                    <figcaption class="card__content">
                        <h3 class="card__text">${title}</h3>
                        <button class="card__likes" title="Mettre un like au média ${title}" aria-pressed="false">
                            <span class="likes-count">${likes}</span> <i class="fa-regular fa-heart"></i>
                        </button>
                    </figcaption>
                </figure>
            `
        })

        document.querySelector('.medias-container').innerHTML = mediaCards
    }

    createLightBoxMedias() {
        let lightBoxContent = ""
        let count = 0

        this.medias.forEach(media => {
            const { photographerId, title, url } = media

            const mediaType = media.generateTemplateLightBox()
            count++

            // pour vidéo
            /*
                <video class="lightbox__slide" controls>
                    <source src="assets/medias/${photographerId}/${this.url}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`
            */

            lightBoxContent += `
                <div class="mySlides hide">
                    ${mediaType}
                </div>
            `
        })

        lightBoxContent += `
            <button class="lightbox__prev" onclick="plusSlides(-1)">&#10094;</button>
            <button class="lightbox__next" onclick="plusSlides(1)">&#10095;</button>

            <div class="lightbox__caption-container">
                <p id="lightBoxCaption"></p>
            </div>
        `

        document.querySelector('.lightbox__content').innerHTML = lightBoxContent
    }
}
