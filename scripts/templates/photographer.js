function photographerTemplate(data) {
    const { name, portrait, country, city, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        /*
        const article = `<article><a href="photographer.html?id=${id}" alt="${name}"><img src="${picture}" alt="" /><h2>${name}</h2></a><h3>${city}, ${country}</h3><p>${tagline}</p><span>${price}€/jour</span></article>`;
        return article;
        */

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
