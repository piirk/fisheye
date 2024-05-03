class App {
    constructor() {
        this.photographersWrapper = document.querySelector('.photographer_section')
        this.photographersApi = new PhotographersApi('./data/photographers.json')
    }

    async main() {
        const photographersData = await this.photographersApi.getPhotographers()
        
        photographersData.photographers
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                const Template = new PhotographerTemplate(photographer)
                this.photographersWrapper.appendChild(
                    Template.createPhotographerCard()
                )
            })
    }
}

const app = new App()
app.main()