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

  //result?: PokemonList | null = null;

  result: Pokemon[] | null = null;

  isFiltering = false;
  animationTriggered = false;
  animationTimeoutRef: any = null;

  searchString: string = "";

  constructor(private apiService: ApiService, private router: Router, private loadingCtrl: LoadingController) {}

  async ngOnInit() {
    let loading = await this.loadingCtrl.create({backdropDismiss: false});
    loading.present();
    document.title = "Pokémons";
    this.result = await this.apiService.listPokemons();
    loading.dismiss();
  }

  getPokemonImgClass(pokemon: {name: string, url: string}) {
    return getPokemonImg(pokemon);
  }

  filterPokemons(): Pokemon[]  {
    return this.result!;
    if (this.searchString == "") {
      return this.result!;
    }

    return this.result!.filter(x => x.name!.includes(this.searchString))!;
  }

  seePokemonDetails(pokemon: {name: string, url: string}) {
    const id = getPokemonId(pokemon.url);
    this.router.navigateByUrl(`/pokemon-detalhes/${id}`);
  }

  
}