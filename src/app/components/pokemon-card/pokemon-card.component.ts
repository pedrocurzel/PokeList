import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { ApiService } from 'src/app/services/api.service';
import { capitalize, getPokemonId, getPokemonImg } from 'src/app/utils/pokemon.utils';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  standalone: false
})
export class PokemonCardComponent  implements OnInit {

  @Input() pokemons!: Pokemon[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getPokemonImg(pokemon: Pokemon) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  }

  capitalizePokemonName(name: string) {
    return capitalize(name);
  }

  styledPokemonId(id: string) {
    return "#" + `${id}`.padStart(3, "0");
  }

}
