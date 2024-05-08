class IndexApp {
    constructor() {
        this._datas = new PhotographersApi('./data/photographers.json')
    }

    async main() {
        return this._datas.getPhotographers()
    }

    static init(dataArray, container) {
        dataArray.forEach(data => {
            const photograph = new Photographer(data)
            container.innerHTML += new PhotographerTemplate(photograph).createPhotographerCard()
        })
    }
}

//
const app = new IndexApp().main()

const photographersWrapper = document.querySelector('.photographer_section')

app.then((data) => {
    const { photographers } = data
    IndexApp.init(photographers, photographersWrapper)
})
