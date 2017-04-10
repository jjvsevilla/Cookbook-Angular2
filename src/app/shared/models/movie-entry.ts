export class MovieEntry {
  id: number;
  originalTitle: string;
  overview: string;
  tagline: string;
  poster: string;
  posterPath: string;
  backdrop: string;
  backdropPath: string;
  release: string;
  vote: string;
  runtime: number;

  constructor(id: number, originalTitle: string, overview: string, tagline: string, poster: string, posterPath: string, backdrop: string, backdropPath: string, release: string, vote: string, runtime: number) {
    this.id = id;
    this.originalTitle = originalTitle;
    this.overview = overview;
    this.tagline = tagline;
    this.poster = poster;
    this.posterPath = posterPath;
    this.backdrop = backdrop;
    this.backdropPath = backdropPath;
    this.release = release;
    this.vote = vote;
    this.runtime = runtime;
  }
}
