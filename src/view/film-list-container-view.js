
import AbstractView from '../framework/view/abstract-view.js';

const createFilmContainer = () => `<div class="films-list__container">
</div>`;


export default class FilmListContainerView  extends AbstractView {

  get template() {
    return createFilmContainer();
  }


}
