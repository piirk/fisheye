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

    get photographer() {
        return this._photographer
    }

    createPhotographerCard() {
        const wrapper = document.createElement('div')
        
        const photographerCard = `
            <article>
                <a href="photographer.html?id=${this._photographer.id}" alt="${this._photographer.name}">
                    <img src="${this._photographer.portrait}" alt="${this._photographer.name}" />
                    <h2>${this._photographer.name}</h2>
                </a>
                <h3>${this._photographer.city}, ${this._photographer.country}</h3>
                <p>${this._photographer.tagline}</p>
                <span>${this._photographer.price}€/jour</span>
            </article>
        `

        wrapper.innerHTML = photographerCard
        return wrapper
    }
}
/*
function photographerTemplate(data) {
    const { name, portrait, country, city, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;
    

    // to do : class

    
    function getUserCardDOM() {

        const article = document.createElement('article');
        
        const a = document.createElement('a');
        a.setAttribute('href', `photographer.html?id=${id}`);
        a.setAttribute('alt', name) ;

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        const h2 = document.createElement('h2');
        h2.textContent = name;

        a.appendChild(img);
        a.appendChild(h2);

        const div = document.createElement('div');

        const spanLocation = document.createElement('span');
        spanLocation.classList.add('text-location');
        spanLocation.textContent = `${city}, ${country}`;
        const p = document.createElement('p');
        p.textContent = tagline;
        const spanPrice = document.createElement('span');
        spanPrice.classList.add('text-price')
        spanPrice.textContent = `${price}€/jour`;

        div.appendChild(spanLocation);
        div.appendChild(p);
        div.appendChild(spanPrice);

        article.appendChild(a);
        article.appendChild(div);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}
*/