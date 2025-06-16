import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/Pokemon';
import { ApiService } from 'src/app/services/api.service';
import { FavPokemonService } from 'src/app/services/fav-pokemon.service';
import { capitalize, getPokemonId, getPokemonImg } from 'src/app/utils/pokemon.utils';

@Component({
    selector: 'app-pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.scss'],
    standalone: false
})
export class PokemonCardComponent implements OnInit {

    @Input() pokemons!: Pokemon[];
    @Input() isShowingFavs!: boolean;

    constructor(private router: Router, private favService: FavPokemonService) { }

    ngOnInit() {
    }

    fav(pokemon: Pokemon) {
        this.favService.favPokemon(pokemon);
        this.pokemons.splice(this.pokemons.findIndex(x => x.id == pokemon.id), 1);
    }

    getPokemonImg(pokemon: Pokemon) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    }

    capitalizePokemonName(name: string) {
        return capitalize(name);
    }

    seePokemonDetails(pokemon: Pokemon) {
        this.router.navigateByUrl(`/pokemon-detalhes/${pokemon.id}`);
    }

}
