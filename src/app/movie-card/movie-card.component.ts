import { Component, Input, OnInit } from '@angular/core';
import { MovieEntry } from '../shared/models/movie-entry';

@Component({
  moduleId: module.id,
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: MovieEntry = null;

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundImage = this.movie.backdrop ? 'url(' + this.movie.backdropPath + ')' : '';
  }
}
