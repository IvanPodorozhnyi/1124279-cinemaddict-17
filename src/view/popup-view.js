
import AbstractView from '../framework/view/abstract-view.js';
import {humanizeDate, getTimeFromMins, formatingDate} from '../until.js';


const commentDateFormat = formatingDate();

const createPopup = (film, filmComments) => {
  const getCommentsFilm = () => {
    const arr = [];
    filmComments.forEach((element) => {
      if (film.comments.includes(element.id)) {
        arr.push(element);
      }
    });
    return arr;
  };

  const {
    filmInfo
  } = film;


  const commentsFilms = getCommentsFilm();


  const generateComments = () => {
    const arr = [];
    commentsFilms.forEach((comment) => {
      arr.push(`<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-smile">
      </span>
      <div>
        <p class="film-details__comment-text">${comment.comment}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${comment.author}</span>
          <span class="film-details__comment-day">${humanizeDate(comment.date, commentDateFormat.comment)}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`);
    });
    return arr;
  };


  const generateGenre = () => {
    const arr = [];
    filmInfo.genre.forEach((genre) => {
      arr.push(`<span class="film-details__genre">${genre}</span>`);
    });
    return arr;
  };


  return `<section class="film-details">
<form class="film-details__inner" action="" method="get">
  <div class="film-details__top-container">
    <div class="film-details__close">
      <button class="film-details__close-btn" type="button">close</button>
    </div>
    <div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src=${filmInfo.poster} alt="">

        <p class="film-details__age">${filmInfo.ageRating} +</p>
      </div>

      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${filmInfo.title}</h3>
            <p class="film-details__title-original">Original: ${filmInfo.alternativeTitle}</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating"> ${filmInfo.totalRating}</p>
          </div>
        </div>

        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">${filmInfo.director}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">${filmInfo.writers}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">${filmInfo.actors}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">${humanizeDate(filmInfo.release.date, commentDateFormat.realease)}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Runtime</td>
            <td class="film-details__cell">${getTimeFromMins(filmInfo.runtime)}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">${filmInfo.release.releaseCountry}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Genres</td>
            <td class="film-details__cell">
          ${generateGenre()}
          </tr>
        </table>

        <p class="film-details__film-description">
        ${filmInfo.description}
      </div>
    </div>

    <section class="film-details__controls">
      <button type="button" class="film-details__control-button ${film.userDetails.watchlist ? 'film-details__control-button--active': ''} film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
      <button type="button" class="film-details__control-button ${film.userDetails.alreadyWatched ? 'film-details__control-button--active': ''} film-details__control-button--watched" id="watched" name="watched">Already watched</button>
      <button type="button" class="film-details__control-button ${film.userDetails.favorite ? 'film-details__control-button--active': ''}film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
    </section>
  </div>

  <div class="film-details__bottom-container">
    <section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${getCommentsFilm().length}</span></h3>

      <ul class="film-details__comments-list">
        ${generateComments()}
      </ul>

      <div class="film-details__new-comment">
        <div class="film-details__add-emoji-label"></div>

        <label class="film-details__comment-label">
          <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
        </label>

        <div class="film-details__emoji-list">
          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
          <label class="film-details__emoji-label" for="emoji-smile">
            <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
          <label class="film-details__emoji-label" for="emoji-sleeping">
            <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
          <label class="film-details__emoji-label" for="emoji-puke">
            <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
          <label class="film-details__emoji-label" for="emoji-angry">
            <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
          </label>
        </div>
      </div>
    </section>
  </div>
</form>
</section>`;
};
export default class PopupView extends AbstractView{

  #film = null;
  #filmComments = null;


  constructor(film, filmComments) {
    super();
    this.#film = film;
    this.#filmComments = filmComments;
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('.film-details__close-btn').addEventListener('click', this.#closeClickButtonHandler);
  };

  #closeClickButtonHandler = (evt) => {
    this._callback.click(evt);
  };

  get template() {
    return createPopup(this.#film, this.#filmComments);
  }
}
