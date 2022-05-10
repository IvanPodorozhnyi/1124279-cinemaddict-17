import { generateMovie, generateComment } from '../mock/movie.js';

export default class FilmModel {
  #films = Array.from({length: 5}, generateMovie);
  #filmComments = Array.from({length: 50}, generateComment);
  get filmComments () {
    return this.#filmComments;
  }

  get films () {
    return this.#films;
  }
}
