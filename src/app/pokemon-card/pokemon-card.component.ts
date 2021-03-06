import { Component, Input } from '@angular/core';
import { PokemonEntry } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon: PokemonEntry = null;
  @Input() withLink: boolean = true;

  constructor() { }
}
