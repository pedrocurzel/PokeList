import { Component, OnInit } from '@angular/core';
import { ApiService, PokemonList } from '../services/api.service';
import { Router } from '@angular/router';
import { capitalize, getPokemonId, getPokemonImg } from '../utils/pokemon.utils';
import { LoadingController, ViewWillEnter } from '@ionic/angular';
import { Pokemon } from '../models/Pokemon';
import { FavPokemonService } from '../services/fav-pokemon.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: false,
})
export class HomePage implements OnInit {

    pokemons: Pokemon[] | null = null;

    pokemonsCopy: Pokemon[] | null = null;

    searchString: string = "";
    isFiltering = false;

    favsIcon: "heart" | "heart-outline" = "heart-outline";
    isShowingFavs = false;

    constructor(private apiService: ApiService, private loadingCtrl: LoadingController, private favPokemonsService: FavPokemonService) { }

    async ngOnInit() {
        let loading = await this.loadingCtrl.create({ backdropDismiss: false });
        loading.present();
        document.title = "Pokémons";
        this.pokemons = await this.apiService.listPokemons();
        loading.dismiss();
    }

    getPokemonImgClass(pokemon: { name: string, url: string }) {
        return getPokemonImg(pokemon);
    }

    filter() {
        this.isFiltering = true;
    }

    showFavs() {
        this.isShowingFavs = !this.isShowingFavs;
        if (this.isShowingFavs) {
            this.pokemonsCopy = this.pokemons;
            this.pokemons = this.favPokemonsService.retriveFavs();
            this.favsIcon = "heart";
        } else {
            this.favsIcon = "heart-outline";
            this.pokemons = this.pokemonsCopy;
        }
    }

    filterPokemons(): Pokemon[] {

        if (this.searchString == "") {
            this.isFiltering = false;
            return this.pokemons!;
        }

        return this.pokemons!.filter(x => x.name!.includes(this.searchString))!;
    }

}