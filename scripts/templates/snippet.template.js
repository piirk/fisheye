class SnippetTemplate {
    constructor(photographer, medias) {
        this._photographer = photographer
        this._medias = medias
    }

    createSnippet() {
        const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0)
        document.querySelector('.snippet-container').innerHTML = `
            <span aria-label="Le photographe cumule ${totalLikes} likes">
                ${totalLikes} <i class="fa-solid fa-heart"></i>
            </span>
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