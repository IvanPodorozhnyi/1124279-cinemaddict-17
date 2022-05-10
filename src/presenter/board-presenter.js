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
import NoMoviesInBaseView from '../view/no-movies-in-base-view.js';




const CARD_COUNT_PER_STEP = 5;
export default class BoardPresenter {
  constructor (boardContainer, filmModel) {
    this.#boardContainer = boardContainer;
    this.#filmModel = filmModel;
  }
  #boardContainer = null;
  #filmModel = null;
  #filmContainer = new FilmListContainerView();
  #filmList = new FilmListView();
  #filmWrapper = new FilmView();
  #boardFilms = [];
  #showMoreButtonComponent = new ShowMoreButtonView();
  #filmComments = [];
  #renderFilmCount = CARD_COUNT_PER_STEP;
  #body = document.body;

  init = () => {
    this.#boardFilms = [...this.#filmModel.films];
    this.#filmComments = [...this.#filmModel.filmComments];
    this.#renderFilmCard();
  };

  
  #renderFilmCard = () => {
    render(new MainNavigationView(), this.#boardContainer);
    render(new FilterView(), this.#boardContainer);
    render(this.#filmWrapper, this.#boardContainer);
    if (this.#boardFilms.every((film) => film.isArchive)) {
      render(new NoMoviesInBaseView(), this.#filmWrapper.element);
    } else {
      render(this.#filmList, this.#filmWrapper.element);
      render(this.#filmContainer, this.#filmList.element);

      for (let i = 0; i < Math.min(this.#boardFilms.length, CARD_COUNT_PER_STEP); i++) {
        this.#renderCardFilm(this.#boardFilms[i]);
      }
      if (this.#boardFilms.length > CARD_COUNT_PER_STEP) {
        render(this.#showMoreButtonComponent, this.#filmList.element);
        this.#showMoreButtonComponent.element.addEventListener('click', this.#clickShowMoreButton);
      }
    }
  }

  #clickShowMoreButton = (evt) => {
    evt.preventDefault();
    this.#boardFilms
      .slice(this.#renderFilmCount, this.#renderFilmCount + CARD_COUNT_PER_STEP)
      .forEach((film) => this.#renderCardFilm(film));

    this.#renderFilmCount+=CARD_COUNT_PER_STEP;

    if (this.#renderFilmCount >= this.#boardFilms.length) {
      this.#showMoreButtonComponent.element.remove();
      this.#showMoreButtonComponent.removeElement();
    }
  };


  #openPopup = (popup) => {
    document.addEventListener('keydown', this.#onEscKeyDown);
    if (this.#body.querySelector('.film-details')) {
      this.#closePopup();
      this.#body.appendChild(popup.element);
    }
    this.#body.appendChild(popup.element);
    this.#body.classList.add('hide-overflow');
  };

  #closePopup = () => {
    this.#body.querySelector('.film-details').remove();
    this.#body.classList.remove('hide-overflow');
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#closePopup();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };

  #renderPopup = (card) => {
    card.element.querySelector('.film-card__link').addEventListener('click', (evt) => {
      const cardId = evt.target.getAttribute('data-id');
      this.#boardFilms.forEach((item) => {
        if (Number(item.id) === Number(cardId)) {
          const popup = new PopupView(item, this.#filmComments);
          this.#openPopup(popup);
          popup.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
            this.#closePopup(popup);
          });
        }
      });
    });
  };

  #renderCardFilm = (film) => {
    const card = new FilmCardView(film);
    render(card, this.#filmContainer.element);
    this.#renderPopup(card);
  };

}

