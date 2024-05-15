class PhotographerTemplate {
    constructor(photographer) {
        this._photographer = photographer
    }

    getPhotographerCard() {
        return `
            <article class="card">
                <a class="card__link" href="photographer.html?id=${this.photographer.id}" alt="Lien vers le profile de ${this.photographer.name}">
                    <img class="card__image" src="${this.photographer.portrait}" alt="Photo de profile de ${this.photographer.name}" />
                    <h2 class="card__name">${this.photographer.name}</h2>
                </a>
                <p class="card__text-location">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="card__text-tagline">${this.photographer.tagline}</p>
                <p class="card__text-price">${this.photographer.price}€/jour</p>
            </article>
        `
    }

    createProfile() {
        document.querySelector('.profile-container').innerHTML = `
            <div class="profile__infos">
                <h1 class="profile__name">${this.photographer.name}</h1>
                <h2 class="profile__location">${this.photographer.city}, ${this.photographer.country}</h2>
                <p class="profile__tagline">${this.photographer.tagline}</p>
            </div>
            <button class="btn" onclick="displayModal()">Contactez-moi</button>
            <img class="profile__image" src="${this.photographer.portrait}" alt="${this.photographer.name}">
        `
    }

    createPhotographerSnippet(totalLikes) {
        document.querySelector('.snippet-container').innerHTML = `
            <span>${totalLikes} <i class="fa-solid fa-heart"></i></span>
            <span>${this.photographer.price}€ / jour</span>
        `
    }
}
