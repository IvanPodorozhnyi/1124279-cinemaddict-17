import AbstractView from '../framework/view/abstract-view.js';


const createNoMovieTemplate = () => (
  '<h2 class="films-list__title">There are no movies in our database</h2>'
);

export default class NoMoviesInBaseView extends AbstractView{

  get template() {
    return createNoMovieTemplate();
  }
}
