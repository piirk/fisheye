class IndexApp {
    constructor() {
        this._datas = new PhotographersApi('./data/photographers.json')
    }

    async main() {
        return this._datas.getPhotographers()
    }

    static init(dataArray, container) {
        dataArray.forEach(data => {
            const photographer = new Photographer(data)
            container.innerHTML += new PhotographerTemplate(photographer).getPhotographerCard()
        })
    }
}

//
const app = new IndexApp().main()

//
const photographersWrapper = document.querySelector('.main__cards')

//
app.then((data) => {
    const { photographers } = data

    IndexApp.init(photographers, photographersWrapper)
})
