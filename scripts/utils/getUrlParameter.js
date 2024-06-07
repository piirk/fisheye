/**
 * récupère la valeur d'un paramètre dans l'url
 * @param {string} name - Le nom du paramètre
 * @returns {string} - La valeur du paramètre
 */
function getUrlParameter(name) {
    const parameters = new URLSearchParams(window.location.search);

    if (parameters.has(name)) {
        return parameters.get(name);
    }

    return `parameter ${name} not found`;
}
