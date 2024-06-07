/**
 * @module IndexApp
 * @requires Api
 * @requires PhotographerCardsTemplate
 */
class IndexApp {
    /**
     * @param {Array} data - Données des photographes
     * @param {Array} data.photographers - Données des photographes
     */
    constructor(data) {
        this._photographers = data;
    }

    /**
     * Initialisation de l'application
     */
    init() {
        const photographerCardsTemplate = new PhotographerCardsTemplate(this._photographers);
        photographerCardsTemplate.createPhotographerCards();
    }
}

//
const api = new Api('./data/photographers.json');

//
api.getPhotographers().then((data) => {
    const app = new IndexApp(data);
    app.init();
})
