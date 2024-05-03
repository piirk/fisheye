app.photographer()
//Mettre le code JavaScript lié à la page photographer.html
/*
const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');

fetch('././data/photographers.json')
    .then(response => response.json())
    .then(data => {
        const photographer = data.photographers.find(photographer => photographer.id === parseInt(photographerId));
        
        if (photographer) {
            const { name, portrait, country, city, tagline, price } = photographer;
            const picture = `assets/photographers/${portrait}`;

            // on récupère les médias du photographes
            const medias = data.media.filter(media => media.photographerId === parseInt(photographerId));

            // photograph-header
            const photographerContainer = document.getElementsByClassName('photograph-header')[0];
            
                // texts
                const div = document.createElement('div');
                const h1 = document.createElement('h1');
                h1.textContent = name;
                div.appendChild(h1);

                const divSubText = document.createElement('div');
                divSubText.classList.add('sub-text');
                const pLocation = document.createElement('p');
                pLocation.classList.add('text-location')
                pLocation.textContent = `${city}, ${country}`;
                const p = document.createElement('p');
                p.textContent = tagline;

                divSubText.appendChild(pLocation);
                divSubText.appendChild(p);
                div.appendChild(divSubText);

                photographerContainer.appendChild(div);

                // button
                const button = document.createElement('button');
                button.classList.add('contact_button');
                button.setAttribute('onclick', 'displayModal()');
                button.textContent = "Contactez-moi";

                photographerContainer.appendChild(button);

                // picture
                const img = document.createElement('img');
                img.setAttribute("src", picture)
                img.setAttribute('alt', name)

                photographerContainer.appendChild(img);

            // encart likes + price
            const likesAndPriceContainer = document.getElementsByClassName('likes-and-price')[0];

                // on calcul le nombre total de likes
                let totalLikes = 0;
                for (const media of medias) {
                    totalLikes += media.likes;
                }

                const spanLikes = document.createElement('span');
                spanLikes.innerHTML = `${totalLikes} <i class="fa-solid fa-heart"></i>`;
                const spanPrice = document.createElement('span');
                spanPrice.textContent = `${price}€ / jour`;

                likesAndPriceContainer.appendChild(spanLikes);
                likesAndPriceContainer.appendChild(spanPrice);
                
        } else {
            console.error('Photographer not found');
        }
    })
    .catch(error => console.error('Error fetching data:', error));
*/