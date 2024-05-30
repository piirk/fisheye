class LightBoxManager {
  constructor() {
    this._modal = document.getElementById("lightbox_modal")
    this._mainWrapper = document.getElementById("main")
    this._snippet = document.querySelector(".snippet-container")
    this._body = document.getElementsByTagName("body")[0]
    this._modalCloseBtn = document.querySelector(".lightbox__close")
    this._slides = document.getElementsByClassName("mySlides")
    this._slideIndex = 1
    this._openingSlide = {}
  }

  open(element) {
    this._mainWrapper.setAttribute('aria-hidden', 'true')
    this._modal.setAttribute('aria-hidden', 'false')
    this._body.classList.add('no-scroll')
    this._snippet.classList.add("hide")
    this._modal.classList.remove("hide")
    this._modalCloseBtn.focus()

    this._openingSlide = element

    trapFocus(this._modal)
  }

  close() {
    this._mainWrapper.setAttribute('aria-hidden', 'false')
    this._modal.setAttribute('aria-hidden', 'true')
    this._body.classList.remove('no-scroll')
    this._snippet.classList.remove("hide")
    this._modal.classList.add("hide")

    this._openingSlide.focus()
  }

  // gestion next/prev controles
  plusSlides(n) {
    this.showSlides(this._slideIndex += n)
  }

  // ouvrir la slide selectionnée
  currentSlide(n) {
    this.showSlides(this._slideIndex = n)
  }

  showSlides(n) {
    const slides = document.getElementsByClassName("mySlides")

    if (n > slides.length) {
      this._slideIndex = 1
    }

    if (n < 1) {
      this._slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide")
    }
    
    slides[this._slideIndex-1].classList.remove("hide")
    document.getElementById("lightBoxCaption").innerHTML = slides[this._slideIndex-1].children[0].getAttribute('alt')
  }
}
