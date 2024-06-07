/**
 * @class PhotographerCardsTemplate
 * @description Création des cartes des photographes sur la page d'accueil (index.html)
 */
class PhotographerCardsTemplate {
    /**
     * @param {Array} photographers - Données des photographes
     */
    constructor(photographers) {
        this._photographers = photographers;
    }

    get photographers() {
        return this._photographers;
    }

    /**
     * Création des cartes des photographes sur la page d'accueil (index.html)
     */
    createPhotographerCards() {
        let photographerCards = '';

        this.photographers.forEach(data => {
            const photographer = new Photographer(data);

            photographerCards += `
                <article class="card">
                    <a class="card__link" href="photographer.html?id=${photographer.id}" alt="Lien vers le profile de ${photographer.name}">
                        <img class="card__image" src="${photographer.portrait}" alt="Photo de profile de ${photographer.name}" />
                        <h2 class="card__name">${photographer.name}</h2>
                    </a>
                    <p class="card__text-location">${photographer.city}, ${photographer.country}</p>
                    <p class="card__text-tagline">${photographer.tagline}</p>
                    <p class="card__text-price">${photographer.price}€/jour</p>
                </article>
            `;
        })

        document.querySelector('.main__cards-container').innerHTML = photographerCards;
    }
}
