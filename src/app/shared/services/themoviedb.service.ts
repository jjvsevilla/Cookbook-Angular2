import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import { MovieList } from '../models/movie-list';
import { MovieEntry } from '../models/movie-entry';
import { Movie } from '../models/movie';

@Injectable()
export class TheMovieDbService {

  private _apiKey: string = 'cfe422613b250f702980a3bbf9e90716';
  private _baseUrl: string = 'https://api.themoviedb.org/3';

  private _queryUrl: string = '/search/movie?query=bat&api_key=cfe422613b250f702980a3bbf9e90716';
  private _movieUrl: string = '/movie/157336?&api_key=cfe422613b250f702980a3bbf9e90716';

  private _posterPathBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  private _backdropPathBaseUrl: string = 'https://image.tmdb.org/t/p/original';

  constructor(private http: Http) { }

  findAll(query: string = ''): Observable<MovieList> {
     return this.http
      .get(`${this._baseUrl}/search/movie?query=${query}&api_key=${this._apiKey}`)
      .map(response => response.json())
      .map(results => this.getList(results));
  }

  findOne(id: number): Observable<Movie> {
    return this.http
      .get(`${this._baseUrl}/movie/${id}?&api_key=${this._apiKey}`)
      .map(response => response.json())
      .map(result => new Movie(
        new MovieEntry(result.id, result.original_title, result.overview, result.tagline,
        result.poster_path, `${this._posterPathBaseUrl}${result.poster_path}`,
        result.backdrop_path, `${this._backdropPathBaseUrl}${result.backdrop_path}`,
        result.release_date, result.vote_average, result.runtime)
      ));
  }

  getList(data): MovieList {
    let results = data.results
      .map(result => this.getEntry(result));
    return new MovieList(results);
  }

  getEntry(data): MovieEntry {
    return new MovieEntry(data.id, data.original_title, data.overview, data.tagline,
    data.poster_path, `${this._posterPathBaseUrl}${data.poster_path}`,
    data.backdrop_path, `${this._backdropPathBaseUrl}${data.backdrop_path}`,
    data.release_date, data.vote_average, data.runtime);
  }
}
