/** 
 * Fonction pour gérer le focus dans le modal de contact
 */
function displayModal() {
    const modal = document.getElementById("contact_modal");

    modal.setAttribute('aria-hidden', 'false');
    modal.classList.remove("hide");
    document.getElementById("main").setAttribute('aria-hidden', 'true');
    document.getElementsByTagName("body")[0].classList.add('no-scroll');
    document.getElementById("contactModalClose").focus();

    trapFocus(modal);
}

/**
 * Fonction pour gérer le focus dans le modal de contact
 */
function closeModal() {
    const modal = document.getElementById("contact_modal");

    modal.setAttribute('aria-hidden', 'true');
    modal.classList.add("hide");
    document.getElementById("main").setAttribute('aria-hidden', 'false');
    document.getElementsByTagName("body")[0].classList.remove('no-scroll');
    document.getElementById("contactForm").reset();
    document.getElementById("contactModalOpen").focus();
}

// Ajout des listeners pour le modal de contact
 document.getElementById('contactForm').addEventListener('submit', function(e) {
    // empêcher le rechargement de la page
    e.preventDefault();

    // afficher les valeurs des inputs
    console.log(document.getElementById('firstName').value);
    console.log(document.getElementById('lastName').value);
    console.log(document.getElementById('email').value);
    console.log(document.getElementById('message').value);
 });
