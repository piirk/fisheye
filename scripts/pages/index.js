class IndexApp {
    constructor() {
        this._datas = new PhotographersApi('./data/photographers.json')
    }

    async main() {
        return this._datas.getPhotographers()
    }

    static init(photographers) {
        const photographerCardsTemplate = new PhotographerCardsTemplate(photographers)
        photographerCardsTemplate.createPhotographerCards()
    }
}

//
const app = new IndexApp().main()

//
app.then((data) => {
    const { photographers } = data
    IndexApp.init(photographers)
})
