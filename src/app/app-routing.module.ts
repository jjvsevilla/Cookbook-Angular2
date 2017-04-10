import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

import { MovieListComponent } from './movie-list/movie-list.component';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pokemons', },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemons/:id', component: PokemonDetailComponent },
  { path: 'movies', component: MovieListComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  PokemonListComponent,
  PokemonDetailComponent,
  MovieListComponent,
  PageNotFoundComponent
];
