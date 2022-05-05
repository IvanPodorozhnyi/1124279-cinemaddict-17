import {render} from './render.js';
import ProfileRatingView from './view/profile-rating-view.js';
import BoardPresenter from './presenter/board-presenter.js';
const boardPresenter = new BoardPresenter();
const siteMainElement = document.querySelector('.main');
const siteHeader = document.querySelector('.header');
import FilmModel from './model/film-model.js';

const filmModel = new FilmModel();

// console.log(new FilmModel().getFilms());

render(new ProfileRatingView, siteHeader);

boardPresenter.init(siteMainElement, filmModel);

