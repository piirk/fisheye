class PhotographerTemplate {
    constructor(photographer) {
        this._photographer = photographer
    }

    getPhotographerCard() {
        const photographerCard = `
            <article class="card">
                <a href="photographer.html?id=${this._photographer.id}" alt="${this._photographer.name}">
                    <img class="card__image" src="${this._photographer.portrait}" alt="${this._photographer.name}" />
                    <h2 class="card__name">${this._photographer.name}</h2>
                </a>
                <p class="card__text-location">${this._photographer.city}, ${this._photographer.country}</p>
                <p class="card__text-tagline">${this._photographer.tagline}</p>
                <p class="card__text-price">${this._photographer.price}€/jour</p>
            </article>
        `

        return photographerCard
    }

    createProfile() {
        const wrapper = document.querySelector('.profile-container')

        const profile = `
            <div class="profile__infos">
                <h1 class="profile__name">${this._photographer.name}</h1>
                <p class="profile__location">${this._photographer.city}, ${this._photographer.country}</p>
                <p class="profile__tagline">${this._photographer.tagline}</p>
            </div>
            <button class="profile__contact" onclick="displayModal()">Contactez-moi</button>
            <img class="profile__image" src="${this._photographer.portrait}" alt="${this._photographer.name}">
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
