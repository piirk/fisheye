/**
 *  Template : PhotographerTemplate
 */

class PhotographerTemplate {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const photographerCard = `
            <article>
                <a href="photographer.html?id=${this._photographer.id}" alt="${this._photographer.name}">
                    <img src="${this._photographer.portrait}" alt="${this._photographer.name}" />
                    <h2>${this._photographer.name}</h2>
                </a>
                <div>
                    <span class="text-location">${this._photographer.city}, ${this._photographer.country}</span>
                    <p>${this._photographer.tagline}</p>
                    <span class="text-price">${this._photographer.price}€/jour</span>
                </div>
            </article>
        `

        return photographerCard
    }

    createProfile() {
        const wrapper = document.querySelector('.photograph-profile')

        const profile = `
            <div>
                <h1>${this._photographer.name}</h1>
                <div class="sub-text">
                    <p class="text-location">${this._photographer.city}, ${this._photographer.country}</p>
                    <p>${this._photographer.tagline}</p>
                </div>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img src="${this._photographer.portrait}" alt="${this._photographer.name}">
        `

        wrapper.innerHTML = profile
    }

    createPhotographerSnippet(totalLikes) {
        const wrapper = document.querySelector('.likes-and-price')

        const photographerSnippet = `
            <span>${totalLikes} <i class="fa-solid fa-heart"></i></span>
            <span>${this._photographer.price}€ / jour</span>
        `

        wrapper.innerHTML = photographerSnippet
    }
}
