/**
 * @class PhotographerTemplate
 * @description Gestion des templates pour les photographes
 */
class PhotographerTemplate {
    /**
     * @param {Photographer} photographer - photographe
     */
    constructor(photographer) {
        this._photographer = photographer;
    }

    get photographer() {
        return this._photographer;
    }

    /**
     * Création du profil du photographe sur la page photographe (photographer.html)
     */
    createProfile() {
        document.querySelector('.profile-container').innerHTML = `
            <div class="profile__infos">
                <h1 class="profile__name">${this.photographer.name}</h1>
                <h2 class="profile__location">${this.photographer.city}, ${this.photographer.country}</h2>
                <p class="profile__tagline">${this.photographer.tagline}</p>
            </div>
            <button id="contactModalOpen" class="btn" onclick="displayModal()">Contactez-moi</button>
            <img class="profile__image" src="${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
    }
}
