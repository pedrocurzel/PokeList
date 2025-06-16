import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Injectable({
    providedIn: 'root'
})
export class FavPokemonService {

    constructor() { }

    
    favPokemon(pokemon: Pokemon) {
        let res = localStorage.getItem("favorites-pokemons");
        let pokemons: Pokemon[] = [];

        if (res) {
            pokemons = JSON.parse(res) as Pokemon[];
            let index = pokemons.findIndex(x => x.id == pokemon.id);
            if (index != -1) {
                pokemons.splice(index, 1);
                localStorage.setItem("favorites-pokemons", JSON.stringify(pokemons));
                return false;
            }            
        }

        pokemons.push(pokemon);
        localStorage.setItem("favorites-pokemons", JSON.stringify(pokemons));
        return true;
    }

    retriveFavs() {
        let res = localStorage.getItem("favorites-pokemons");
        return !res ? [] : JSON.parse(res) as Pokemon[]; 
    }


    pokemonExists(pokemon: Pokemon) {
        let res = localStorage.getItem("favorites-pokemons");
        if (!res) return false;
        const pokemons = JSON.parse(res) as Pokemon[];
        return pokemons.findIndex(x => x.id == pokemon.id) != -1;
    }
}
