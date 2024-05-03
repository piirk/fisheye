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
        
        console.log(this._medias)
        // on calcul le nombre total de likes
        let totalLikes = 0
        for (const media of this._medias) {
            totalLikes += media.likes
        }

        const likesAndPrice = `
            <span>
                ${totalLikes} <i class="fa-solid fa-heart"></i>
            </span>
            <span>
            ${this._photographer.price}€ / jour
            </span>
        `

        wrapper.innerHTML = likesAndPrice
    }
}
