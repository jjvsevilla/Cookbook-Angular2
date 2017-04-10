import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import { PokemonList } from '../models/pokemon-list';
import { PokemonEntry } from '../models/pokemon-entry';
import { Pokemon } from '../models/pokemon';

@Injectable()
export class PokemonService {

  private _baseUrl: string = 'http://pokeapi.co/api/v2';
  private _spriteBaseUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork';
  private _detailRegex = /^http:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\/$/;

  constructor(private http: Http) { }

  findAll(offset: number = 0, limit: number = 20): Observable<PokemonList> {
     return this.http
      .get(`${this._baseUrl}/pokemon/?offset=${offset}&limit=${limit}`)
      .map(response => response.json())
      .map(results => this.getList(results));
  }

  findOne(id: number): Observable<Pokemon> {
    return this.http
      .get(`${this._baseUrl}/pokemon/${id}/`)
      .map(response => response.json())
      .map(result => new Pokemon(
        new PokemonEntry(result.id, _.capitalize(result.name), `${this._spriteBaseUrl}/${result.id}.png`),
      ));
  }

  getList(data): PokemonList {
    let results = data.results
      .map(result => this.getEntry(result))
      .filter(entry => entry.id < 10000);
    return new PokemonList(results, 721);
  }

  getEntry(data): PokemonEntry {
    const matches = this._detailRegex.exec(data.url),
      id = matches == null ? null : parseInt(matches[1]),
      sprite = id == null ? null : `${this._spriteBaseUrl}/${id}.png`;
    return new PokemonEntry(id , _.capitalize(data.name), sprite);
  }

}
