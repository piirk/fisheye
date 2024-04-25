function photographerTemplate(data) {
    const { name, portrait, country, city, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        const article = `<article><a href="photographer.html?id=${id}" alt="${name}"><img src="${picture}" alt="" /><h2>${name}</h2></a><h3>${city}, ${country}</h3><p>${tagline}</p><span>${price}€/jour</span></article>`;
        return article;

        /*
        const article = document.createElement('article');
        const a = document.createElement('a');
        a.setAttribute('href', 'photographer.html');
        a.setAttribute('alt', name) ;

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = `${city}, ${country}`;
        const p = document.createElement('p');
        p.textContent = tagline;
        const span = document.createElement('span');
        span.textContent = `${price}€/jour`;

        a.appendChild(img);
        a.appendChild(h2);

        article.appendChild(a);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(span);

        return (article);
        */
    }
    return { name, picture, getUserCardDOM }
}
