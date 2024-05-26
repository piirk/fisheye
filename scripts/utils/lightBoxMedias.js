function openLightBox(element) {
    const modal = document.getElementById("lightbox_modal")
    const mainWrapper = document.getElementById("main")
    const snippet = document.querySelector(".snippet-container")
    const body = document.getElementsByTagName("body")[0]
    const modalCloseBtn = document.querySelector(".lightbox__close")
    
    mainWrapper.setAttribute('aria-hidden', 'true')
    modal.setAttribute('aria-hidden', 'false')
    body.classList.add('no-scroll')
    snippet.classList.add("hide")
    modal.classList.remove("hide")
    modalCloseBtn.focus()

    openingSlide = element

    trapFocus(modal)
}

function closeLightBox() {
    const modal = document.getElementById("lightbox_modal")
    const mainWrapper = document.getElementById("main")
    const snippet = document.querySelector(".snippet-container")
    const body = document.getElementsByTagName("body")[0]

    mainWrapper.setAttribute('aria-hidden', 'false')
    modal.setAttribute('aria-hidden', 'true')
    body.classList.remove('no-scroll')
    snippet.classList.remove("hide")
    modal.classList.add("hide")

    openingSlide.focus()
}

// gestion next/prev controles
function plusSlides(n) {
    showSlides(slideIndex += n)
}

// ouvrir la slide selectionnée
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides")

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide")
    }
    
    slides[slideIndex-1].classList.remove("hide")
    document.getElementById("lightBoxCaption").innerHTML = slides[slideIndex-1].children[0].getAttribute('alt')
}
