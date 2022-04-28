import {
  render
} from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilterView from '../view/filter-view.js';
import FilmView from '../view/film-view.js';
import MainNavigationView from '../view/main-navigation-view.js';
import PopupView from '../view/popup-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';


export default class BoardPresenter {

  init = (boardContainer) => {

    this.boardContainer = boardContainer;

    render(new MainNavigationView(), this.boardContainer);

    render(new FilterView(), this.boardContainer);

    render(new FilmView(), this.boardContainer);

    const filmList = document.querySelector('.films-list__container'); // Не нравится мне это, но пока не дошло как можно сделать иначе.

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), filmList);
    }
    render(new ShowMoreButtonView, filmList);

    render(new PopupView, this.boardContainer);
  };
}

