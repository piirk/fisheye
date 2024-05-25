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
        let counter = 0

        this.medias.forEach(media => {
            const { photographerId, title, url, likes, date } = media

            const mediaType = media.generateTemplate()
            counter++

            mediaCards += `
                <figure class="card">
                    <${mediaType} class="card__media" onclick="openLightBox();currentSlide(${counter})" src="assets/medias/${photographerId}/${url}" alt="'${title} fait en ${new Date(date).getFullYear()}'">${(mediaType === 'video' ? '</video>' : '' )}
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
}
