import { Component, Input, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';
import { TheMovieDbService } from '../shared/services';
import { MovieEntry } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'movie-search-box',
  templateUrl: './movie-search-box.component.html',
  styleUrls: ['./movie-search-box.component.scss']
})
export class MovieSearchBoxComponent {
  onFocusOutTimeOut: number = 200;
  movieServiceLogo: string = 'assets/lospapus-logo.png';
  movies: MovieEntry[];
  hasMovies: boolean = false;
  isSearching: boolean = false;
  loading: boolean = false;
  failed: boolean = false;
  query: string = null;
  @Output() handleSelectMovie: EventEmitter<MovieEntry> = new EventEmitter<MovieEntry>();

  constructor(private theMovieDbService: TheMovieDbService) { }

  getMovies(event) {
    this.movies = [];
    this.loading = true;
    this.failed = false;
    this.hasMovies = false;
    this.isSearching = false;

    if (!(event.target.value.length && event.target.value.length > 1)) return;

    this.query = event.target.value;
    this.theMovieDbService
      .findAll(this.query)
      .subscribe(result => {
        this.movies = result.movies;
        this.hasMovies = true;
        this.isSearching = true;
        this.loading = false;
      }, () => {
        this.hasMovies = false;
        this.isSearching = false;
        this.loading = false;
        this.failed = true;
      });
  }

  selectMovie(movie) {
    this.movies = [];
    this.hasMovies = false;
    this.isSearching = false;
    this.handleSelectMovie.emit(movie);
  }

  onFocus(event) {
    this.isSearching = true;
  }

  onFocusout(event) {
    setTimeout(() => {
      this.isSearching = false;
    }, this.onFocusOutTimeOut);
  }
}
