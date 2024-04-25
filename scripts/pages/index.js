// Récupération des photographes depuis le fichier JSON
async function getPhotographers() {
    const url = '././data/photographers.json';
    const data = await fetch(url).then(data => data.json());
    
    return data.photographers;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        //photographersSection.innerHTML += userCardDOM;
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    displayData(photographers);
}

init();
