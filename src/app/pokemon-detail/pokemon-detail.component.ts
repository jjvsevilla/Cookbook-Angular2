import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { PokemonService } from '../shared/services';
import { Pokemon } from '../shared/models';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  moduleId: module.id,
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html'
})
export class PokemonDetailComponent implements OnInit {
  private id: any;
  pokemon: Pokemon;
  loading: boolean = false;
  failed: boolean = false;
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
    private titleService: Title,
    private location: Location) { }

  ngOnInit() {
    if (!this.pokemon) {
      this.route.params
        .map(params => params['id'])
        .do(id => this.id = +id)
        .subscribe(id => this.getPokemon());
    }
  }

  getPokemon() {
    this.loading = true;
    this.failed = false;
    this.pokemonService
      .findOne(this.id)
      .subscribe((pokemon: Pokemon) => {
        this.pokemon = pokemon;
        this.titleService.setTitle(`#${pokemon.baseInfo.id} - ${pokemon.baseInfo.name}`)
        this.loading = false;
      }, () => {
        this.loading = false;
        this.failed = true;
      });
   }

  goBack() {
    this.location.back();
  }

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

}
