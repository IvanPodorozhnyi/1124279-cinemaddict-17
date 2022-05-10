import {
  createElement
} from '../render.js';

import {getTimeFromMins, formatingDate, humanizeDate} from '../until.js';
const formatDateFilm = formatingDate();

const createFilmCard = (film) => {
  const {id, comments, filmInfo, userDetails} = film;

  return (
    `<article class="film-card">
  <a class="film-card__link">
  <h3 class="film-card__title">${filmInfo.title}</h3>
  <p class="film-card__rating"></p>
  <p class="film-card__info">
    <span class="film-card__year">${humanizeDate(filmInfo.release.date, formatDateFilm.realeaseYear)}</span>
    <span class="film-card__duration">${getTimeFromMins(filmInfo.runtime)}</span>
    <span class="film-card__genre">${filmInfo.genre}</span>
  </p>
  <img src="${filmInfo.poster}" alt="" class="film-card__poster" data-id="${id}">
  <p class="film-card__description">${filmInfo.description}</p>
  <span class="film-card__comments">${comments.length} comments</span>
  </a>
<div class="film-card__controls">
  <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${userDetails.watchlist ? 'film-card__controls-item--active': ''}" type="button">Add to watchlist</button>
  <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${userDetails.alreadyWatched ? 'film-card__controls-item--active': ''}" type="button">Mark as watched</button>
  <button class="film-card__controls-item film-card__controls-item--favorite ${userDetails.favorite ? 'film-card__controls-item--active': ''}" type="button">Mark as favorite</button>
</div>
</article>`
  );
};


export default class FilmCardView {
  #element = null;
  #film = null;

  constructor(film) {
    this.#film = film;
  }

  get template () {
    return createFilmCard(this.#film);
  }


  get element () {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }

}
