import { PokemonEntry } from './pokemon-entry';

export class Pokemon {
  baseInfo: PokemonEntry;

  constructor(baseInfo: PokemonEntry) {
    this.baseInfo = baseInfo;
  }
}
