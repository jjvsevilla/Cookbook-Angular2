import { MovieEntry } from './movie-entry';

export class Movie {
  baseInfo: MovieEntry;

  constructor(baseInfo: MovieEntry) {
    this.baseInfo = baseInfo;
  }
}
