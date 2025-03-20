import { Component, OnInit } from '@angular/core';
import { ApiService, PokemonList } from '../services/api.service';
import { Router } from '@angular/router';
import { capitalize, getPokemonId, getPokemonImg } from '../utils/pokemon.utils';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  result?: PokemonList;

  isFiltering = false;
  animationTriggered = false;
  animationTimeoutRef: any = null;

  searchString: string = "";

  constructor(private apiService: ApiService, private router: Router, private loadingCtrl: LoadingController) {}

  async ngOnInit() {
    let loading = await this.loadingCtrl.create({backdropDismiss: false});
    loading.present();
    document.title = "Pokémons"
    this.result = await this.apiService.listPokemons();
    loading.dismiss();
  }

  getPokemonImgClass(pokemon: {name: string, url: string}) {
    return getPokemonImg(pokemon);
  }

  filterPokemons(): { name: string; url: string; }[]  {
    if (this.searchString == "") {
      return this.result?.results!;
    }

    return this.result?.results!.filter(x => x.name.includes(this.searchString))!;
  }

  toggleFilter() {
    clearTimeout(this.animationTimeoutRef);
    this.animationTriggered = false;

    this.isFiltering = !this.isFiltering;
    this.animationTriggered = true;

    this.searchString = "";

    this.animationTimeoutRef = setTimeout(() => {
      this.animationTriggered = false;
    }, 500);
  }

  capitalizePokemonName(name: string) {
    return capitalize(name);
  }

  seePokemonDetails(pokemon: {name: string, url: string}) {
    const id = getPokemonId(pokemon.url);
    this.router.navigateByUrl(`/pokemon-detalhes/${id}`);
  }

  
}