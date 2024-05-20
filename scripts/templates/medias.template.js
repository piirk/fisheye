class MediasTemplate {
    constructor(medias) {
        this._medias = medias
    }

    createPhotographerMedias() {
        const wrapper = document.querySelector('.medias-container')
        let mediaCards = ""
        let mediaType = ""

        this.medias.forEach(media => {
            const { id, photographerId, title, url, likes, date } = media

            mediaType = media.generateTemplate()

            mediaCards += `
                <figure class="card">
                    ${mediaType}
                    <figcaption class="card__content">
                        <h3 class="card__text">${title}</h3>
                        <button class="card__likes"><span class="likes-count">${likes}</span> <i class="fa-regular fa-heart"></i></button>
                    </figcaption>
                </figure>
            `
        })

        wrapper.innerHTML = mediaCards
    }

    get medias() {
        return this._medias
    }
}
