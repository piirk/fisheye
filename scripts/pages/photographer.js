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

    init() {
        

        this.generateProfile()
        this.generateSnippet()
        this.generateMedias()

        document.querySelector("title").textContent = `Fisheye - ${this.photographer.name}`
        document.querySelector(".modal__header__title").innerHTML = `Contactez-moi<br />${this.photographer.name}`

        this.addListenersSort()
        this.addListenersLikes()
        this.addListenersKeyboard()
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

    generateProfile() {
        new PhotographerTemplate(this.photographer).createProfile()
    }

    generateSnippet() {
        new SnippetTemplate(this.photographer, this.medias).createSnippet()
    }

    generateMedias(sortBy = "popularité") {
        const mediasTemplate = new MediasTemplate(this.sortMedias(sortBy))
        mediasTemplate.createPhotographerMedias()
        mediasTemplate.createLightBoxMedias()
    }

    // listeners pour le formulaire de tri
    addListenersSort() {
        document.querySelector('.medias-form').addEventListener('change', () => {
            this.generateMedias(document.getElementById('order-select').value)
            this.addListenersLikes()
        })
    }

    // listeners pour les likes
    addListenersLikes() {
        document.querySelectorAll('.card__likes').forEach(button => {
            button.addEventListener('click', function() {
                // incrémentation sur button + snippet
                const likesCountButton = this.querySelector('.likes-count')
                const likesCountSnippet = document.querySelector('.likes-count-snippet')
                const heartIcon = this.querySelector('i')

                let likes = parseInt(likesCountButton.textContent)
                let likesTotal = parseInt(likesCountSnippet.textContent)

                if (heartIcon.classList.contains('fa-solid')) {
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
            })
        })
    }

    // listeners pour le clavier
    addListenersKeyboard() {
        document.addEventListener('keydown', function(e) {
            // lightbox: escape, left arrow, right arrow
            const lightBox = document.getElementById("lightbox_modal")
            
            if (lightBox.getAttribute('aria-hidden') == 'false' && e.key === "Escape") {
                lightBoxManager.close()
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
}

//
const api = new Api('./data/photographers.json')
const photographerId = Number(getUrlParameter("id"))
const lightBoxManager = new LightBoxManager()

//
api.getPhotographerByIdWithMedias(photographerId).then(data => {
    const app = new PhotographerApp(data.photographer, data.medias)
    app.init()
})
