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
              });

        const photographerTemplate = new PhotographerTemplate(photographer)
        const mediaTemplate = new MediaTemplate(photographer, medias)
        photographerTemplate.createPhotographerHeader()
        mediaTemplate.createPhotographerSnippet()
    }
}

const app = new App()
