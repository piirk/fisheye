/**
 * @class SnippetTemplate
 * @description Gestion de l'affichage du snippet du photographe
 */
class SnippetTemplate {
    /**
     * @param {Photographer} photographer - photographe
     * @param {Array<Media>} medias - médias
     */
    constructor(photographer, medias) {
        this._photographer = photographer;
        this._medias = medias;
    }

    get photographer() {
        return this._photographer;
    }

    get medias() {
        return this._medias;
    }

    /**
     * Création du snippet du photographe sur la page photographe (photographer.html)
     */
    createSnippet() {
        const totalLikes = this.medias.reduce((acc, media) => acc + media.likes, 0);
        document.querySelector('.snippet-container').innerHTML = `
            <p aria-label="Le photographe cumule ${totalLikes} likes" tabindex="0">
                <span class="likes-count-snippet">${totalLikes}</span> <i class="fa-solid fa-heart"></i>
            </p>
            <span aria-label="Le prix demandé par le photographe est de ${this.photographer.price} par jour" tabindex="0">
                ${this.photographer.price}€ / jour
            </span>
        `;
    }
}
