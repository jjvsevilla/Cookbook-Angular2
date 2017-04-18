import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';
import { MaterializeModule } from 'angular2-materialize';

// import 'materialize-css';

import { AppComponent } from './app.component';
import { PokemonService } from './shared/services/pokemon.service';
import { TheMovieDbService } from './shared/services/themoviedb.service';

import { AppRoutingModule, routableComponents } from './app-routing.module';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieSearchBoxComponent } from './movie-search-box/movie-search-box.component';

import { PaginationComponent } from './shared/pagination/pagination.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    PokemonCardComponent,
    MovieCardComponent,
    MovieSearchBoxComponent,
    PaginationComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
  ],
  providers: [
    PokemonService,
    TheMovieDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
