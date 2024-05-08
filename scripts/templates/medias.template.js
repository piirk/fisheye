/**
 *  Template : MediasTemplate
 */

class MediasTemplate {
    constructor(medias) {
        this._medias = medias
    }

    createPhotographerMedias() {
        const wrapper = document.querySelector('.medias')
        let mediaCards = ""
        let mediaType = ""

        this._medias.forEach(media => {
            const { id, photographerId, title, url, type, likes, date } = media
            
            if (type == 'image') {
                mediaType = `
                    <img src="${url}" alt="'${title} fait en ${new Date(date).getFullYear()}'">
                `
            } else {
                mediaType = `
                    <video src="${url}"></video>
                `
            }

            mediaCards += `
                <figure class="card">
                    <a href="" alt="${title}">
                        ${mediaType}
                    </a>
                    <figcaption class="card-content">
                        <p class="card-text">${title}</p>
                        <span class="card-likes">${likes} <i class="fa-solid fa-heart"></i></span>
                    </figcaption>
                </figure>
            `
        })

        wrapper.innerHTML = mediaCards
    }
}
