class Api {
    constructor(url) {
        this._url = url
    }

    async getPhotographers() {
        const response = await fetch(this._url)
        const data = await response.json()
        const { photographers } = data

        return photographers
    }

    async getPhotographerByIdWithMedias(photographerId) {
        const response = await fetch(this._url)
        const data = await response.json()
        const { photographers, media } = data

        const photographer = photographers.find(el => el.id === photographerId)
        const medias = media.filter(el => el.photographerId == photographerId)
        
        return { photographer, medias }
    }
}
