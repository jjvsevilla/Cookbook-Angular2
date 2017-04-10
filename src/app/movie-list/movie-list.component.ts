import { Component, OnInit } from '@angular/core';
import { TheMovieDbService } from '../shared/services';
import { MovieEntry, Movie } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
  movies: MovieEntry[];
  movie: Movie;
  loading: boolean = false;
  failed: boolean = false;

  constructor(private theMovieDbService: TheMovieDbService) { }

  ngOnInit() {
    this.findMovie(157336);
  }

  findMovie(id) {
    this.loading = true;
    this.failed = false;

    this.theMovieDbService
      .findOne(id)
      .subscribe(result => {
        this.movie = result;
        this.loading = false;
      }, () => {
        this.loading = false;
        this.failed = true;
      });
  }

  handleSelectMovie(movie) {
    this.findMovie(movie.id);
  }
}
