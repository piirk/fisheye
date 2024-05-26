class SnippetTemplate {
    constructor(photographer, medias) {
        this._photographer = photographer
        this._medias = medias
    }

    createSnippet() {
        const totalLikes = this.medias.reduce((acc, media) => acc + media.likes, 0)
        document.querySelector('.snippet-container').innerHTML = `
            <p aria-label="Le photographe cumule ${totalLikes} likes">
                <span class="likes-count-snippet">${totalLikes}</span> <i class="fa-solid fa-heart"></i>
            </p>
            <span aria-label="Le prix demandé par le photographe est de ${this.photographer.price} par jour">
                ${this.photographer.price}€ / jour
            </span>
        `
    }

    get photographer() {
        return this._photographer
    }

    get medias() {
        return this._medias
    }
}
