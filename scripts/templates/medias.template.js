class MediasTemplate {
    constructor(medias) {
        this._medias = medias
    }

    createPhotographerMedias() {
        const wrapper = document.querySelector('.medias-container')
        let mediaCards = ""
        let mediaType = ""

        this._medias.forEach(media => {
            const { id, photographerId, title, url, type, likes, date } = media
            
            if (type == 'image') {
                mediaType = `
                    <img class="card__media" src="${url}" alt="'${title} fait en ${new Date(date).getFullYear()}'">
                `
            } else {
                mediaType = `
                    <video class="card__media" src="${url}"></video>
                `
            }

            mediaCards += `
                <figure class="card">
                    <a href="" alt="${title}">
                        ${mediaType}
                    </a>
                    <figcaption class="card__content">
                        <p class="card__text">${title}</p>
                        <button class="card__likes">${likes} <i class="fa-solid fa-heart"></i></button>
                    </figcaption>
                </figure>
            `
        })

        wrapper.innerHTML = mediaCards
    }
}
