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
                    <a href="" alt="${title}" aria-label="Image nommée ${title}">
                        <img class="card__media" src="${url}" alt="'${title} fait en ${new Date(date).getFullYear()}'">
                    </a>
                `
            } else {
                mediaType = `
                    <a href="" alt="${title}" aria-label="Vidéo nommée ${title}">
                        <video class="card__media" src="${url}"></video>
                    </a>
                `
            }

            mediaCards += `
                <figure class="card">
                    ${mediaType}
                    <figcaption class="card__content">
                        <h3 class="card__text">${title}</h3>
                        <button class="card__likes">${likes} <i class="fa-solid fa-heart"></i></button>
                    </figcaption>
                </figure>
            `
        })

        wrapper.innerHTML = mediaCards
    }
}
