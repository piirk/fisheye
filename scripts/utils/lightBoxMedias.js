function openLightBox() {
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

    trapFocus(modal)
}

// Close the Modal
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
}

// quand clique échap, ferme la modal si ouverte
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById("lightbox_modal")
    
    if (modal.getAttribute('aria-hidden') == 'false' && e.key === "Escape") {
        closeLightBox()
    }
 })

let slideIndex = 1

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i
    var slides = document.getElementsByClassName("mySlides")
    var captionText = document.getElementById("lightBoxCaption")

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide")
    }
    
    slides[slideIndex-1].classList.remove("hide")
    captionText.innerHTML = slides[slideIndex-1].children[0].getAttribute('alt')
}
