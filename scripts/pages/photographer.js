class PhotographerApp {
    constructor() {
        this._datas = new PhotographersApi('./data/photographers.json')
    }

    async main() {
        return this._datas.getPhotographers()
    }

    static getPhotographer(photographers, id) {
        return new Photographer(photographers.find(photographer => photographer.id === id))
    }

    static getMedias(medias, id) {
        return medias
            .filter(media => media.photographerId === id)
            .map(media => {
                if (media.image === undefined) {
                    return new MediasFactory(media, "video")
                } else {
                    return new MediasFactory(media, "image")
                }
            })
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
        const sortedMedias = this.sortMedias(medias, sortBy)
        new MediasTemplate(sortedMedias).createPhotographerMedias()
    }
}

//
const app = new PhotographerApp().main()

//
const photographerId = Number(getUrlParameter("id"))

let photographer = {}
let medias = []

//
app.then((data) => {
    const { photographers, media } = data
    
    photographer = PhotographerApp.getPhotographer(photographers, photographerId)
    medias = PhotographerApp.getMedias(media, photographerId)

    //
    const photographerTemplate = new PhotographerTemplate(photographer)
    const snippetTemplate = new SnippetTemplate(photographer, medias)

    photographerTemplate.createProfile()
    snippetTemplate.createSnippet()

    PhotographerApp.generateMedias(medias)

    //
    const titleMetaTag = document.querySelector("title")
    const contactTitle = document.querySelector(".modal__header__title")

    titleMetaTag.textContent = `Fisheye - ${photographer.name}`
    contactTitle.innerHTML = `Contactez-moi<br />${photographer.name}`

    // ajout des events listeners
    addListeners()
})

// fonction pour créer tous les events listeners
function addListeners() {
    // eventListener pour le form de tri
    const sortForm = document.querySelector('.medias-form')
    const sortBySelect = document.getElementById('order-select')

    sortForm.addEventListener('change', (event) => {
        const sortBy = sortBySelect.value
        PhotographerApp.generateMedias(medias, sortBy)
    })

    // gestion des likes des médias
    document.querySelectorAll('.card__likes').forEach(button => {
        button.addEventListener('click', function() {
            // incrémentation sur button + snippet
            const likesCountButton = this.querySelector('.likes-count')
            const likesCountSnippet = document.querySelector('.likes-count-snippet')
            const heartIcon = this.querySelector('i')

            let likes = parseInt(likesCountButton.textContent)
            let likesTotal = parseInt(likesCountSnippet.textContent)

            const isLiked = heartIcon.classList.contains('fa-solid')

            if (isLiked) {
                likes -= 1
                likesTotal -= 1
                this.setAttribute('aria-pressed', 'false')
            } else {
                likes += 1
                likesTotal += 1
                this.setAttribute('aria-pressed', 'true')
            }

            likesCountButton.textContent = likes
            likesCountSnippet.textContent = likesTotal
    
            // changement icone
            heartIcon.classList.toggle('fa-regular')
            heartIcon.classList.toggle('fa-solid')
        });
    });
}
