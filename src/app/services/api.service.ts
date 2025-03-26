import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

const baseApiUrl = "https://pokeapi.co/api/v2/pokemon";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  async listPokemons(limit = 151) {
    const pokemonsPromises = Array.from({ length: limit }, (_, i) =>
      firstValueFrom(this.http.get(`${baseApiUrl}/${i+1}`))
    );

    return await Promise.all(pokemonsPromises) as Pokemon[];
  }

  async getPokemonDetails(pokemonId: number) {
    return await firstValueFrom(
      this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    );
  }
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}