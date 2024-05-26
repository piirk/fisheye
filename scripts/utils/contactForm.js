function displayModal() {
    const modal = document.getElementById("contact_modal")
    const mainWrapper = document.getElementById("main")
    const body = document.getElementsByTagName("body")[0]
    const modalCloseBtn = document.getElementById("contactModalClose")

    mainWrapper.setAttribute('aria-hidden', 'true')
    modal.setAttribute('aria-hidden', 'false')
    body.classList.add('no-scroll')
    modal.classList.remove("hide")
    modalCloseBtn.focus()

    trapFocus(modal)
}

function closeModal() {
    const modal = document.getElementById("contact_modal")
    const mainWrapper = document.getElementById("main")
    const body = document.getElementsByTagName("body")[0]
    const modalOpenBtn = document.getElementById("contactModalOpen")

    mainWrapper.setAttribute('aria-hidden', 'false')
    modal.setAttribute('aria-hidden', 'true')
    body.classList.remove('no-scroll')
    modal.classList.add("hide")
    modalOpenBtn.focus()
}

// quand clique échap, ferme la modal si ouverte
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById("contact_modal")
    
    if (modal.getAttribute('aria-hidden') == 'false' && e.key === "Escape") {
        closeModal()
    }
 })
