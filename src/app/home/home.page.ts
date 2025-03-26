import { Component, OnInit } from '@angular/core';
import { ApiService, PokemonList } from '../services/api.service';
import { Router } from '@angular/router';
import { capitalize, getPokemonId, getPokemonImg } from '../utils/pokemon.utils';
import { LoadingController } from '@ionic/angular';
import { Pokemon } from '../models/Pokemon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  pokemons: Pokemon[] | null = null;

  searchString: string = "";
  isFiltering = false;

  constructor(private apiService: ApiService, private router: Router, private loadingCtrl: LoadingController) {}

  async ngOnInit() {
    let loading = await this.loadingCtrl.create({backdropDismiss: false});
    loading.present();
    document.title = "Pokémons";
    this.pokemons = await this.apiService.listPokemons();
    loading.dismiss();
  }

  getPokemonImgClass(pokemon: {name: string, url: string}) {
    return getPokemonImg(pokemon);
  }

  filter() {
    this.isFiltering = true;
  }

  checkFilterString() {

  }

  filterPokemons(): Pokemon[]  {

    if (this.searchString == "") {
      this.isFiltering = false;
      return this.pokemons!;
    }

    return this.pokemons!.filter(x => x.name!.includes(this.searchString))!;
  }

  seePokemonDetails(pokemon: {name: string, url: string}) {
    const id = getPokemonId(pokemon.url);
    this.router.navigateByUrl(`/pokemon-detalhes/${id}`);
  }

  
}