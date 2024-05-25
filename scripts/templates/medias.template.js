class MediasTemplate {
    constructor(medias) {
        this._medias = medias
    }

    get medias() {
        return this._medias
    }

    createPhotographerMedias() {
        const wrapper = document.querySelector('.medias-container')
        let mediaCards = ""
        let count = 0

        this.medias.forEach(media => {
            const { photographerId, title, url, likes, date } = media

            const mediaType = media.generateTemplate()
            count++

            mediaCards += `
                <figure class="card">
                    <a href="javascript:;" onclick="openLightBox();currentSlide(${count})" tabindex="0" title="Ouvrir le média ${title} dans la light box">
                        <${mediaType} class="card__media" src="assets/medias/${photographerId}/${url}" alt="'${title} fait en ${new Date(date).getFullYear()}'">${(mediaType === 'video' ? '</video>' : '' )}
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

        wrapper.innerHTML = mediaCards
    }

    createLightBoxMedias() {
        const wrapper = document.querySelector('.lightbox__content')

        let lightBoxContent = ""
        let count = 0

        this.medias.forEach(media => {
            const { photographerId, title, url } = media

            const mediaType = media.generateTemplate()
            count++

            lightBoxContent += `
                <div class="mySlides hide">
                    <${mediaType} class="lightbox__slide" src="assets/medias/${photographerId}/${url}" alt="${title}">${(mediaType === 'video' ? '</video>' : '' )}
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

        wrapper.innerHTML = lightBoxContent
    }
}
