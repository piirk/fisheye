class PhotographerApp {
    constructor() {
        this._datas = new PhotographersApi('./data/photographers.json')
    }

    async main() {
        return this._datas.getPhotographers()
    }

    static getPhotographer(photographers, id) {
        let photographerObject = {}

        photographers.forEach(photographer => {
            if (photographer.id === id) {
                photographerObject = new Photographer(photographer)
            }
        })

        return photographerObject
    }

    static getMedias(medias, id) {
        let mediasArrayOfObject = []

        mediasArrayOfObject = medias
            .filter(media => media.photographerId === id)
            .map(media => {
                if (media.image === undefined) {
                    return new MediasFactory(media, "video")
                } else {
                    return new MediasFactory(media, "image")
                }
            })

        return mediasArrayOfObject
    }

    static sortMedias(medias, sortBy) {
        let sortedMedias = [];

        switch (sortBy) {
            case "titre": {
                sortedMedias = medias.sort((a, b) => a.title.localeCompare(b.title))
                break
            }
            case "popularité": {
                sortedMedias = medias.sort((a, b) => b.likes - a.likes)
                break
            }
            case "date": {
                sortedMedias = medias.sort((a, b) => new Date(b.date) - new Date(a.date))
                break
            }
        }
        
        return sortedMedias;
    }

    static generateMedias(medias, sortBy = "popularité") {
        let sortedMedias = []

        sortedMedias = this.sortMedias(medias, sortBy)

        new MediasTemplate(sortedMedias).createPhotographerMedias()
    }
}

//
const app = new PhotographerApp().main()

//
const photographerId = Number(getUrlParameter("id"))

let photographer = {}
let medias = []

let totalLikes = 0

//
app.then((data) => {
    const { photographers, media } = data
    
    photographer = PhotographerApp.getPhotographer(photographers, photographerId)
    medias = PhotographerApp.getMedias(media, photographerId)

    totalLikes = medias.reduce((acc, media) => acc + media.likes, 0)

    //
    const photographerTemplate = new PhotographerTemplate(photographer)

    photographerTemplate.createProfile()
    photographerTemplate.createPhotographerSnippet(totalLikes)

    PhotographerApp.generateMedias(medias)

    // ajout des events listeners
    addListeners()
})

// fonction pour créer tout les events listeners
function addListeners() {
    // eventListener pour le form de tri
    const sortForm = document.querySelector('form')
    const sortBySelect = document.getElementById('order-select')

    sortForm.addEventListener('change', (event) => {
        const sortBy = sortBySelect.value
        PhotographerApp.generateMedias(medias, sortBy)
    })

    // gestion d'event entre select généré et select original (pour sémantique)
    const originalSelect = document.getElementById('order-select')
    const selectItems = document.querySelectorAll('.select-items div')

    selectItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // envoi valeur choisie au <select> original
            const selectedValue = item.textContent.toLowerCase()
            originalSelect.value = selectedValue
            
            // gestion des attributs sur les <options>
            originalSelect.querySelectorAll('option').forEach(option => {
                option.removeAttribute('selected')
            })
            originalSelect.querySelector(`option[value="${selectedValue}"]`).setAttribute('selected', 'selected')

            // envoi d'un event pour déclencher le listener
            originalSelect.dispatchEvent(new Event('change', { bubbles: true }))
        })
    })
}
