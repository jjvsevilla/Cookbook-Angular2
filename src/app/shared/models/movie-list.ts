import { MovieEntry } from './movie-entry';

export class MovieList {
  movies: MovieEntry[];

  constructor(movies: MovieEntry[]) {
    this.movies = movies;
  }
}
