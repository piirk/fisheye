/**
 * @fileoverview Page photographe
 * @module PhotographerApp
 * @requires Api
 * @requires Photographer
 * @requires MediasFactory
 * @requires LightboxManager
 * @requires PhotographerTemplate
 * @requires SnippetTemplate
 * @requires MediasTemplate
 * @requires getUrlParameter
 */
class PhotographerApp {
    /** 
     * @param {Object} photographer - données du photographe
     * @param {Array<Media>} medias - données des médias
     * @param {LightboxManager} lightbox - gestionnaire de la lightbox
     */
    constructor(photographer, medias) {
        this._photographer = new Photographer(photographer);
        this._medias = medias;
        this._lightbox = new LightboxManager(medias);
    }
    
    get photographer() {
        return this._photographer;
    }

    get medias() {
        return this._medias;
    }

    get lightbox() {
        return this._lightbox;
    }

    /**
     * Initialisation de l'application 
     */
    init() {
        new PhotographerTemplate(this.photographer).createProfile();
        new SnippetTemplate(this.photographer, this.medias).createSnippet();
        new MediasTemplate(this.sortMedias("popularité")).createPhotographerThumbnails();

        this.lightbox.init();

        document.querySelector("title").textContent = `Fisheye - ${this.photographer.name}`;
        document.querySelector(".modal__header__title").innerHTML = `Contactez-moi<br />${this.photographer.name}`;

        this.addListenersSort();
        this.addListenersLikes();
        this.addListenersKeyboard();
    }

    /**
     * Tri des médias
     * @param {string} sortBy - critère de tri (titre, popularité, date)
     * @returns {Array<Media>} - médias triés
     */
    sortMedias(sortBy) {
        let sortedMedias = [];

        switch (sortBy) {
            case "titre": {
                sortedMedias = this.medias.sort((a, b) => a.title.localeCompare(b.title));
                break;
            }
            case "popularité": {
                sortedMedias = this.medias.sort((a, b) => b.likes - a.likes);
                break;
            }
            case "date": {
                sortedMedias = this.medias.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            }
        }

        return sortedMedias;
    }

    /**
     * Mise à jour des vignettes et des slides
     * @param {string} sortBy - critère de tri (titre, popularité, date)
     */
    updateThumbnailsAndSlidesDisplay(sortBy = "popularité") {
        new MediasTemplate(this.sortMedias(sortBy)).createPhotographerThumbnails();
        this._lightbox.generateTemplateSlides();
    }

    /**
     * Ajout des listeners pour le tri
     */
    addListenersSort() {
        document.querySelector('.medias-form').addEventListener('change', () => {
            this.updateThumbnailsAndSlidesDisplay(document.getElementById('order-select').value);
            this.addListenersLikes();
        })
    }

    /**
     * Ajout des listeners pour les likes
     */
    addListenersLikes() {
        document.querySelectorAll('.card__likes').forEach(button => {
            button.addEventListener('click', function() {
                // incrémentation sur button + snippet
                const likesCountButton = this.querySelector('.likes-count');
                const likesCountSnippet = document.querySelector('.likes-count-snippet');
                const heartIcon = this.querySelector('i');

                let likes = parseInt(likesCountButton.textContent);
                let likesTotal = parseInt(likesCountSnippet.textContent);

                if (heartIcon.classList.contains('fa-solid')) {
                    likes -= 1;
                    likesTotal -= 1;
                    this.setAttribute('aria-pressed', 'false');
                } else {
                    likes += 1;
                    likesTotal += 1;
                    this.setAttribute('aria-pressed', 'true');
                }

                likesCountButton.textContent = likes;
                likesCountSnippet.textContent = likesTotal;
        
                // changement de l'icône
                heartIcon.classList.toggle('fa-regular');
                heartIcon.classList.toggle('fa-solid');
            })
        })
    }

    /**
     * Ajout des listeners clavier
     */
    addListenersKeyboard() {
        document.addEventListener('keydown', (e) => {
            // fermeture du modal de contact
            if (document.getElementById('contact_modal').getAttribute('aria-hidden') == 'false' && e.key === 'Escape') {
                document.getElementById("contactModalClose").click();
            }
        })
    }
}

//
const api = new Api('./data/photographers.json');
const photographerId = Number(getUrlParameter("id"));
 
//
api.getPhotographerByIdWithMedias(photographerId).then(data => {
    const medias = data.medias.map(media => { return new MediasFactory(media) });
    const app = new PhotographerApp(data.photographer, medias);
    app.init();
});
