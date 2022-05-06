import {createElement} from '../render.js';

const createFilmWrapper = () => `<section class="films">
</section>`;


export default class FilmView {
  getTemplate() {
    return createFilmWrapper();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }

}
