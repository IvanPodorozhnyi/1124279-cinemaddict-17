import { generateMovie, generateComment } from '../mock/movie.js';

export default class FilmModel {
  films = Array.from({length: 5}, generateMovie);
  filmComments = Array.from({length: 50}, generateComment);
  getComments = () => this.filmComments;
  getFilms = () => this.films;
}
