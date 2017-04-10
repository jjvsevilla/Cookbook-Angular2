import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/services';
import { PokemonEntry, Pokemon } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {
  pokemons: PokemonEntry[] ;
  count: number = 0;
  offset: number = 0;
  limit: number = 20;
  loading: boolean = false;
  failed: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    document.body.style.backgroundImage = 'url("http://cdn.segmentnext.com/wp-content/uploads/2016/05/Pokemon-Sun-and-Moon-Gym-Leaders-and-Types.jpg")';
    this.findAll(this.offset, this.limit);
  }

  findAll(offset: number, limit: number) {
    this.pokemons = [];
    this.loading = true;
    this.failed = false;

    this.pokemonService
      .findAll(offset, limit)
      .subscribe(result => {
        this.pokemons = result.pokemons;
        this.count = result.count;
        this.loading = false;
      }, () => {
        this.loading = false;
        this.failed = true;
      });
  }

  onPageClick(offset) {
    this.offset = offset;
    this.findAll(offset, this.limit);
  }
}
