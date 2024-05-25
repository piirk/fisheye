class IndexApp {
    constructor(data) {
        this._photographers = data
    }

    init() {
        const photographerCardsTemplate = new PhotographerCardsTemplate(this._photographers)
        photographerCardsTemplate.createPhotographerCards()
    }
}

//
const api = new Api('./data/photographers.json')

//
api.getPhotographers().then((data) => {
    const app = new IndexApp(data)
    app.init()
})
