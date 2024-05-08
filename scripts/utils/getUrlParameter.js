function getUrlParameter(name) {
    const parameters = new URLSearchParams(window.location.search);

    if (parameters.has(name)) {
        return parameters.get(name);
    }

    return `parameter ${name} not found`;
}
