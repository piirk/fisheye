/**
 *  Template : MediaTemplate
 */

class MediaTemplate {
    /**
     * 
     * @param {Photographer} photographer 
     * @param {Media[]} medias 
     */
    constructor(photographer, medias) {
        this._photographer = photographer
        this._medias = medias
    }

    createPhotographerSnippet() {
        const wrapper = document.getElementsByClassName('likes-and-price')[0]
        
        // on calcul le nombre total de likes
        const totalLikes = this._medias.reduce((acc, media) => acc + media.likes, 0)

        const likesAndPrice = `
            <span>${totalLikes} <i class="fa-solid fa-heart"></i></span>
            <span>${this._photographer.price}€ / jour</span>
        `

        wrapper.innerHTML = likesAndPrice
    }
}
