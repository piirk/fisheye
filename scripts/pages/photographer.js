class PhotographerApp {
    constructor(photographer, medias) {
        this._photographer = new Photographer(photographer)
        this._medias = medias.map(media => { return new MediasFactory(media) })
    }

    
    get photographer() {
        return this._photographer
    }

    get medias() {
        return this._medias
    }

    sortMedias(sortBy) {
        let sortedMedias = [];
        
        switch (sortBy) {
            case "titre": {
                sortedMedias = this.medias.sort((a, b) => a.title.localeCompare(b.title))
                break
            }
            case "popularité": {
                sortedMedias = this.medias.sort((a, b) => b.likes - a.likes)
                break
            }
            case "date": {
                sortedMedias = this.medias.sort((a, b) => new Date(b.date) - new Date(a.date))
                break
            }
        }
        
        return sortedMedias;
    }

    generateMedias(sortBy = "popularité") {
        const sortedMedias = this.sortMedias(sortBy)
        const mediasTemplate = new MediasTemplate(sortedMedias)

        mediasTemplate.createPhotographerMedias()
        mediasTemplate.createLightBoxMedias()
    }
}

//
const api = new Api('./data/photographers.json')
const photographerId = Number(getUrlParameter("id"))

//
api.getPhotographerByIdWithMedias(photographerId).then(data => {
    let { photographer, medias } = data
    
    const app = new PhotographerApp(photographer, medias)

    const photographerTemplate = new PhotographerTemplate(app.photographer)
    const snippetTemplate = new SnippetTemplate(app.photographer, app.medias)

    photographerTemplate.createProfile()
    snippetTemplate.createSnippet()

    app.generateMedias()

    // var pour lightbox
    let openingSlide = {}
    let slideIndex = 1

    //
    document.querySelector("title").textContent = `Fisheye - ${photographer.name}`
    document.querySelector(".modal__header__title").innerHTML = `Contactez-moi<br />${photographer.name}`

    // ajout des events listeners
    addListeners(app)
    addListenersLikes()
    addListenersKeyboard()
})

// fct créer les events listeners
function addListeners(app) {
    // eventListener pour le form de tri
    const sortForm = document.querySelector('.medias-form')
    const sortBySelect = document.getElementById('order-select')

    sortForm.addEventListener('change', (event) => {
        const sortBy = sortBySelect.value
        app.generateMedias(sortBy)
        addListenersLikes()
    })
}

// fct gestion des likes des médias
function addListenersLikes() {
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

// fct créer listeners keyboard shortcuts
function addListenersKeyboard() {
    document.addEventListener('keydown', function(e) {
        // lightbox: escape, left arrow, right arrow
        const lightBox = document.getElementById("lightbox_modal")
        
        if (lightBox.getAttribute('aria-hidden') == 'false' && e.key === "Escape") {
            closeLightBox()
        }
        if (lightBox.getAttribute('aria-hidden') == 'false' && e.key === "ArrowLeft") {
            document.querySelector(".lightbox__prev").click()
        }
        if (lightBox.getAttribute('aria-hidden') == 'false' && e.key === "ArrowRight") {
            document.querySelector(".lightbox__next").click()
        }

        // contact form: escape
        const modal = document.getElementById('contact_modal')
    
        if (modal.getAttribute('aria-hidden') == 'false' && e.key === 'Escape') {
            closeModal()
        }
    })
}
