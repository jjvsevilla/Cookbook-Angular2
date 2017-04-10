import { MovieEntry } from './movie-entry';

export class MovieList {
  movies: MovieEntry[];
  // count: number;

  constructor(movies: MovieEntry[]) {
    this.movies = movies;
    // this.count = count;
  }
}
