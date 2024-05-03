/**
 *  Template : PhotographerTemplate
 */

class PhotographerTemplate {
    /**
     * 
     * @param {Photographer} photographer 
     */
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const wrapper = document.createElement('div')
        
        const photographerCard = `
            <article>
                <a href="photographer.html?id=${this._photographer.id}" alt="${this._photographer.name}">
                    <img src="${this._photographer.portrait}" alt="${this._photographer.name}" />
                    <h2>${this._photographer.name}</h2>
                </a>
                <div>
                    <span class="text-location">${this._photographer.city}, ${this._photographer.country}</span>
                    <p>${this._photographer.tagline}</p>
                    <span class="text-price">${this._photographer.price}€/jour</span>
                </div>
            </article>
        `

        wrapper.innerHTML = photographerCard
        return wrapper
    }

    createPhotographerHeader() {
        const photographerContainer = document.getElementsByClassName('photograph-header')[0]
            
        // texts
        const textWrapper = document.createElement('div')

        const photographerHeaderText = `
            <h1>${this._photographer.name}</h1>
            <div class="sub-text">
                <p class="text-location">${this._photographer.city}, ${this._photographer.country}</p>
                <p>${this._photographer.tagline}</p>
            </div>
        `

        textWrapper.innerHTML = photographerHeaderText
        photographerContainer.appendChild(textWrapper)

        // button
        const button = createHTMLElement(`
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        `)

        photographerContainer.appendChild(button)

        // portrait
        const img = createHTMLElement(`
            <img src="${this._photographer.portrait}" alt="${this._photographer.name}">
        `)

        photographerContainer.appendChild(img)
    }
}
