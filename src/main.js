import {render} from './render.js';
import ProfileRatingView from './view/profile-rating-view.js';
import BoardPresenter from './presenter/board-presenter.js';

const boardPresenter = new BoardPresenter();
const siteMainElement = document.querySelector('.main');
const siteHeader = document.querySelector('.header');

render(new ProfileRatingView, siteHeader);

boardPresenter.init(siteMainElement);

