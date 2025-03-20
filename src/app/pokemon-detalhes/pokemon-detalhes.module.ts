import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonDetalhesPageRoutingModule } from './pokemon-detalhes-routing.module';

import { PokemonDetalhesPage } from './pokemon-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonDetalhesPageRoutingModule
  ],
  declarations: [PokemonDetalhesPage]
})
export class PokemonDetalhesPageModule {}
