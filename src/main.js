import {render} from './render.js';
import ProfileRatingView from './view/profile-rating-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilmModel from './model/film-model.js';

const siteMainElement = document.querySelector('.main');
const siteHeader = document.querySelector('.header');


const filmModel = new FilmModel();
const boardPresenter = new BoardPresenter();

render(new ProfileRatingView, siteHeader);

boardPresenter.init(siteMainElement, filmModel);
