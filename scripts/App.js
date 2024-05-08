class App {
    constructor() {
        this.photographersApi = new PhotographersApi('./data/photographers.json')
    }

    // page index.js
    async index() {
        const photographersWrapper = document.querySelector('.photographer_section')
        const photographersData = await this.photographersApi.getPhotographers()
        
        photographersData.photographers
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                const Template = new PhotographerTemplate(photographer)
                photographersWrapper.appendChild(Template.createPhotographerCard())
            })
    }

    // page photographer.js
    async photographer() {
        // récupération id photographe via url
        const urlParams = new URLSearchParams(window.location.search)
        const photographerId = urlParams.get('id')
        const photographersData = await this.photographersApi.getPhotographers()

        const photographer = photographersData.photographers
            .filter(photographer => photographer.id == photographerId)
            .map(photographer => new Photographer(photographer))[0]
            
        const medias = photographersData.media
            .filter(media => media.photographerId == photographerId)
            .map(media => { 
                if (media.image === undefined) {
                  return new MediasFactory(media, "video")
                } else {
                  return new MediasFactory(media, "image")
                }
            })
            .sort((a, b) => b.likes - a.likes)
        
        const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0)
              
        const photographerTemplate = new PhotographerTemplate(photographer)
        const mediaTemplate = new MediaTemplate(photographer, medias)

        photographerTemplate.createProfile()
        photographerTemplate.createPhotographerSnippet(totalLikes)

        // medias gallery, tri "popularité" par défaut
        mediaTemplate.createPhotographerMedias()
        
        // eventListener pour le form de tri
        const sortForm = document.querySelector('form');
        const sortBySelect = document.getElementById('order-select');

        sortForm.addEventListener('change', (event) => {
            const sortBy = sortBySelect.value;
            
            if (sortBy === 'popularité') {
                medias.sort((a, b) => b.likes - a.likes)
            } else if (sortBy === 'date') {
                medias.sort((a, b) => new Date(b.date) - new Date(a.date))
            } else if (sortBy === 'titre') {
                medias.sort((a, b) => a.title.localeCompare(b.title))
            }
            mediaTemplate.createPhotographerMedias()
        });

        // gestion d'event entre select généré et select original (pour sémantique)
        const originalSelect = document.getElementById('order-select');
        const selectItems = document.querySelectorAll('.select-items div');

        selectItems.forEach(item => {
            item.addEventListener('click', (event) => {
                // envoi valeur choisie au <select> original
                const selectedValue = item.textContent.toLowerCase();
                originalSelect.value = selectedValue
                
                // gestion des attributs sur les <options>
                originalSelect.querySelectorAll('option').forEach(option => {
                    option.removeAttribute('selected');
                });
                originalSelect.querySelector(`option[value="${selectedValue}"]`).setAttribute('selected', 'selected');

                // envoi d'un event pour déclencher le listener
                originalSelect.dispatchEvent(new Event('change', { bubbles: true }));
            });
        });
    }
}

const app = new App()

// fonction pour les templates, ou la placer ?
function createHTMLElement(html) {
    const placeholder = document.createElement("div")
    placeholder.innerHTML = html
    return placeholder.firstElementChild
}
