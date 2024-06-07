/**
 * @class Api
 * @classdesc Classe permettant de gérer les appels à l'API
 */
class Api {
    /**
     * @param {string} url - URL de l'API
     */
    constructor(url) {
        this._url = url;
    }

    /**
     * @returns {Promise<Array<Object>>} - Données des photographes
     */
    async getPhotographers() {
        const response = await fetch(this._url);
        const data = await response.json();
        const { photographers } = data;

        return photographers;
    }

    /** 
     * @param {number} photographerId - Identifiant du photographe
     * @returns {Promise<Object>} - Données du photographe et de ses médias
     */
    async getPhotographerByIdWithMedias(photographerId) {
        const response = await fetch(this._url);
        const data = await response.json();
        const { photographers, media } = data;

        const photographer = photographers.find(el => el.id === photographerId);
        const medias = media.filter(el => el.photographerId == photographerId);
        
        return { photographer, medias };
    }
}
