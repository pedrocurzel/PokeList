import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Pokemon } from '../models/Pokemon';
import { capitalize } from '../utils/pokemon.utils';
import { LoadingController } from '@ionic/angular';
import { FavPokemonService } from '../services/fav-pokemon.service';

@Component({
    selector: 'app-pokemon-detalhes',
    templateUrl: './pokemon-detalhes.page.html',
    styleUrls: ['./pokemon-detalhes.page.scss'],
    standalone: false
})
export class PokemonDetalhesPage implements OnInit {

    pokemon: Pokemon | null = null;

    favPokemonService = inject(FavPokemonService);

    favPokemonIcon: 'heart-outline' | 'heart' = "heart-outline";

    constructor(private route: ActivatedRoute, private apiService: ApiService, private loadingCtrl: LoadingController, private router: Router) { }

    async ngOnInit() {
        let load = await this.loadingCtrl.create({
            backdropDismiss: false
        });
        load.present();
        let pokemonId = this.route.snapshot.paramMap.get('id')!;

        if (Number.parseInt(pokemonId) < 1 || !pokemonId) {
            this.changeUrlLocation();
        }

        try {
            this.pokemon = await this.apiService.getPokemonDetails(Number.parseInt(pokemonId));
            this.favPokemonIcon = this.favPokemonService.pokemonExists(this.pokemon!) ? "heart" : "heart-outline";
            document.title = `${this.pokemon.id} - ${this.capitalizeText(this.pokemon.name!)}`;
        } catch (error) {
            this.changeUrlLocation();
        } finally {
            load.dismiss();
        }
    }

    favPokemon() {
        let pokemonInserido = this.favPokemonService.favPokemon(this.pokemon!);
        if (pokemonInserido) {
            this.favPokemonIcon = 'heart';
            return;
        }

        //foi removido
        this.favPokemonIcon = "heart-outline";
    }

    goToHome() {
        this.router.navigateByUrl("home", {
            replaceUrl: true
        })
    }

    changeUrlLocation(pokemonId = '1') {
        window.location.href = `/pokemon-detalhes/${pokemonId}`;
    }

    capitalizeText(text: string) {
        return capitalize(text);
    }

    getPokemonImg() {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon?.id}.png`;
    }

    changePokemon(action: 'forward' | 'backward') {
        if (action == 'backward' && this.pokemon?.id! == "1") return;

        if (action == 'backward') {
            let newId = Number.parseInt(this.pokemon?.id!) - 1;
            this.changeUrlLocation(newId.toString());
            return;
        }

        let newId = Number.parseInt(this.pokemon?.id!) + 1;
        this.changeUrlLocation(newId.toString());
        return;
    }
}
