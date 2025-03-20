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

  async listPokemons(limit = 351) {
    return await firstValueFrom(
      this.http.get<PokemonList>(baseApiUrl + `?limit=${limit}`)
    );
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