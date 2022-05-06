import {
  render
} from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilterView from '../view/filter-view.js';
import FilmView from '../view/film-view.js';
import MainNavigationView from '../view/main-navigation-view.js';
import PopupView from '../view/popup-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmListView from '../view/film-list-view.js';
import FilmListContainerView from '../view/film-list-container-view.js';


export default class BoardPresenter {
  filmContainer = new FilmListContainerView();
  filmList = new FilmListView();
  filmWrapper = new FilmView();


  init = (boardContainer, filmModel) => {
    this.boardContainer = boardContainer;
    this.filmModel = filmModel;
    this.boardFilms = [...this.filmModel.getFilms()];
    this.filmComments = [...this.filmModel.getComments()];

    render(new MainNavigationView(), this.boardContainer);
    render(new FilterView(), this.boardContainer);
    render(this.filmWrapper, this.boardContainer);
    render(this.filmList, this.filmWrapper.getElement());
    render(this.filmContainer, this.filmList.getElement());

    for (let i = 0; i < this.boardFilms.length; i++) {
      render(new FilmCardView(this.boardFilms[i]), this.filmContainer.getElement());

    }
    render(new ShowMoreButtonView, this.filmContainer.getElement());

    const cardsFilms = document.querySelectorAll('.film-card');

    cardsFilms.forEach((element) => {
      element.addEventListener('click', (evt) => {
        const cardId = evt.target.getAttribute('data-id');
        this.boardFilms.forEach((film) => {
          if (Number(film.id) === Number(cardId)) {
            render(new PopupView(film, this.filmComments), this.boardContainer);
            document.querySelector('.film-details__close-btn').addEventListener('click', () => {
              document.querySelector('.film-details').remove();
            });
          }
        });
      });
    });
  };
}

