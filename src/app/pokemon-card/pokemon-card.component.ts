import { Component, Input } from '@angular/core';
import { PokemonEntry } from '../shared/models/pokemon-entry';

@Component({
  moduleId: module.id,
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon: PokemonEntry = null;
  @Input() withLink: boolean = true;

  constructor() { }
}
