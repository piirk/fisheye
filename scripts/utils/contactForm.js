/** 
 * Affiche la modal de contact
 */
function displayModal() {
    const modal = document.getElementById("contact_modal");

    modal.setAttribute('aria-hidden', 'false');
    modal.classList.remove("hide");
    document.getElementById("main").setAttribute('aria-hidden', 'true');
    document.getElementsByTagName("body")[0].classList.add('no-scroll');
    document.getElementById("contactModalClose").focus();

    // si le message de succès est affiché, on le cache et on affiche le formulaire
    document.getElementById('contactForm').classList.remove('hide');
    document.querySelector('.modal__success').classList.add('hide');

    trapFocus(modal);
}

/**
 * Cache la modal de contact
 */
function closeModal() {
    const modal = document.getElementById("contact_modal");

    modal.setAttribute('aria-hidden', 'true');
    modal.classList.add("hide");
    document.getElementById("main").setAttribute('aria-hidden', 'false');
    document.getElementsByTagName("body")[0].classList.remove('no-scroll');
    document.getElementById("contactForm").reset();
    document.getElementById("contactModalOpen").focus();

    // s'il y a des erreurs, on les cache
    hideError('firstName');
    hideError('lastName');
    hideError('email');
    hideError('message');
}

/**
 * valide le formulaire de contact
 */
function validateContactForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let error = false;

    // Vérification du prénom
    if (!firstName) {
        showError('firstName', 'Le prénom est obligatoire');
        error = true;
    } else if (firstName.length < 2) {
        showError('firstName', 'Le prénom doit contenir au moins 2 caractères');
        error = true;
    } else if (firstName.length > 50) {
        showError('firstName', 'Le prénom doit contenir moins de 50 caractères');
        error = true;
    } else if (!/^[a-zA-Zéèàêâùûçïë\- ]+$/.test(firstName)) {
        showError('firstName', 'Le prénom ne doit contenir que des lettres');
        error = true;
    } else {
        hideError('firstName');
    }

    // Vérification du nom
    if (!lastName) {
        showError('lastName', 'Le nom est obligatoire');
        error = true;
    } else if (lastName.length < 2) {
        showError('lastName', 'Le nom doit contenir au moins 2 caractères');
        error = true;
    } else if (lastName.length > 50) {
        showError('lastName', 'Le nom doit contenir moins de 50 caractères');
        error = true;
    } else if (!/^[a-zA-Zéèàêâùûçïë\- ]+$/.test(lastName)) {
        showError('lastName', 'Le nom ne doit contenir que des lettres');
        error = true;
    } else {
        hideError('lastName');
    }

    // Vérification de l'email
    if (!email) {
        showError('email', 'L\'email est obligatoire');
        error = true;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        showError('email', 'L\'email n\'est pas valide');
        error = true;
    } else {
        hideError('email');
    }

    // Vérification du message
    if (!message) {
        showError('message', 'Le message est obligatoire');
        error = true;
    } else if (message.length < 10) {
        showError('message', 'Le message doit contenir au moins 10 caractères');
        error = true;
    } else if (message.length > 500) {
        showError('message', 'Le message doit contenir moins de 500 caractères');
        error = true;
    } else {
        hideError('message');
    }

    // Si le formulaire est valide, on affiches les données dans la console
    if (!error) {
        console.log('Prénom :', firstName);
        console.log('Nom :', lastName);
        console.log('Email :', email);
        console.log('Message :', message);

        // on affiche le message de confirmation et on cache le formulaire
        document.getElementById('contactForm').reset();
        document.getElementById('contactForm').classList.add('hide');
        document.querySelector('.modal__success').classList.remove('hide');
        document.getElementById('contactModalSuccess').focus();
    }
}

/**
 * Affiche un message d'erreur
 * @param {string} field - L'élément du formulaire
 * @param {string} message - Le message d'erreur
 */
function showError(field, message) {
    document.getElementById(field).classList.add('error');
    document.getElementById(field + 'Error').innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${message}`;
}

/**
 * Cache un message d'erreur
 * @param {string} field - L'élément du formulaire
 */
function hideError(field) {
    document.getElementById(field).classList.remove('error');
    document.getElementById(field + 'Error').textContent = '';
}
