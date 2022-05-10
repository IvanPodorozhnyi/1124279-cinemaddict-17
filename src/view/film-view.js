import {createElement} from '../render.js';

const createFilmWrapper = () => `<section class="films">
</section>`;


export default class FilmView {

  #element = null;

  get template() {
    return createFilmWrapper();
  }


  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }

}
