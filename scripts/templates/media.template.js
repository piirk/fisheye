/**
 *  Template : MediaTemplate
 */

class MediaTemplate {
    /**
     * Template pour les médias
     * @param {Photographer} photographer 
     * @param {Media[]} medias 
     */
    constructor(photographer, medias) {
        this._photographer = photographer
        this._medias = medias
    }

    createPhotographerSnippet() {
        const wrapper = document.querySelector('.likes-and-price')
        
        // on calcul le nombre total de likes
        const totalLikes = this._medias.reduce((acc, media) => acc + media.likes, 0)

        const likesAndPrice = `
            <span>${totalLikes} <i class="fa-solid fa-heart"></i></span>
            <span>${this._photographer.price}€ / jour</span>
        `

        wrapper.innerHTML = likesAndPrice
    }

    createPhotographerMedias() {
        const wrapper = document.querySelector('.medias')
        let mediaCards = ""

        this._medias.forEach(media => {
            mediaCards += `
                <figure class="card">
                    <a href="" alt="${media.title}">
                        <img src="${media.url}" alt="${media.title}">
                    </a>
                    <figcaption class="card-content">
                        <p class="card-text">${media.title}</p>
                        <span class="card-likes">${media.likes} <i class="fa-solid fa-heart"></i></span>
                    </figcaption>
                </figure>
            `
        })

        wrapper.innerHTML = mediaCards
    }
}
