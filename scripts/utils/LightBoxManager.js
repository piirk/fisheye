/**
 * @class LightboxManager
 * @description Gestionnaire de la lightbox
 */
class LightboxManager {
  /**
   * @param {Array<Media>} medias - médias
   */
  constructor(medias) {
    this._medias = medias;
    this._modal = document.getElementById("lightbox_modal");
    this._mainWrapper = document.getElementById("main");
    this._snippet = document.querySelector(".snippet-container");
    this._body = document.getElementsByTagName("body")[0];
    this._modalCloseBtn = document.querySelector(".lightbox__close");
    this._slides = document.getElementsByClassName("mySlides");
    this._slideIndex = 1;
    this._openingSlide = {};
  }

  /**
   * Initialisation de la lightbox
   */
  init() {
    // génération des slides
    this.generateTemplateSlides();

    // attacher les événements
    this._modalCloseBtn.addEventListener('click', () => this.close());
    this._modal.addEventListener('click', (e) => {
      if (e.target === this._modal) {
        this.close();
      }
    });

    document.querySelector(".lightbox__content__prev").addEventListener('click', () => this.plusSlides(-1));
    document.querySelector(".lightbox__content__next").addEventListener('click', () => this.plusSlides(1));

    document.addEventListener('keydown', (e) => {
      if (this._modal.getAttribute('aria-hidden') == 'false' && e.key === "Escape") {
        this.close();
      }
      if (this._modal.getAttribute('aria-hidden') == 'false' && e.key === "ArrowLeft") {
        this.plusSlides(-1);
      }
      if (this._modal.getAttribute('aria-hidden') == 'false' && e.key === "ArrowRight") {
        this.plusSlides(1);
      }
    });
  }

  /**
   * Générer les slides de la lightbox
   */
  generateTemplateSlides() {
    let slides = '';

    this._medias.forEach(media => {
        slides += `
            <div class="mySlides hide">
                ${media.generateTemplateLightbox()}
            </div>
        `;
    });

    document.querySelector('.lightbox__content__slides').innerHTML = slides;

    // attacher les événements pour ouvrir la lightbox
    this._medias.forEach((media, index) => {
      document.querySelector(`[data-id="${media.id}"]`).addEventListener('click', () => {
        this.currentSlide(index + 1);
        this.open(document.querySelector(`[data-id="${media.id}"]`));
      });
    });
  }

  /**
   * Ouvrir la lightbox
   * @param {HTMLElement} element - élément qui a été cliqué
   */
  open(element) {
    this._mainWrapper.setAttribute('aria-hidden', 'true');
    this._modal.setAttribute('aria-hidden', 'false');
    this._body.classList.add('no-scroll');
    this._snippet.classList.add('hide');
    this._modal.classList.remove('hide');
    this._modalCloseBtn.focus();

    this._openingSlide = element;

    trapFocus(this._modal);
  }

  /**
   * Fermer la lightbox
   */
  close() {
    this._mainWrapper.setAttribute('aria-hidden', 'false');
    this._modal.setAttribute('aria-hidden', 'true');
    this._body.classList.remove('no-scroll');
    this._snippet.classList.remove("hide");
    this._modal.classList.add("hide");

    this._openingSlide.focus();
  }

  /**
   * Afficher la slide suivante ou précédente
   * @param {number} n - 1 pour la suivante, -1 pour la précédente
   */
  plusSlides(n) {
    this.showSlides(this._slideIndex += n);
  }

  /**
   * Afficher une slide spécifique
   * @param {number} n - numéro de la slide
   */
  currentSlide(n) {
    this.showSlides(this._slideIndex = n);
  }

  /**
   * Afficher une slide
   * @param {number} n - numéro de la slide
   */
  showSlides(n) {
    const slides = document.getElementsByClassName('mySlides');

    // si on arrive à la fin, on revient au début
    if (n > slides.length) {
      this._slideIndex = 1;
    }

    // si on revient au début, on va à la fin
    if (n < 1) {
      this._slideIndex = slides.length;
    }

    // on cache toutes les slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hide');
    }
    
    // on affiche la slide courante et on met à jour le caption
    slides[this._slideIndex-1].classList.remove('hide');
    document.getElementById('lightboxCaption').innerHTML = slides[this._slideIndex-1].children[0].getAttribute('alt');
  }
}
