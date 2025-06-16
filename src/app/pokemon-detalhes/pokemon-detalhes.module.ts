import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonDetalhesPageRoutingModule } from './pokemon-detalhes-routing.module';

import { PokemonDetalhesPage } from './pokemon-detalhes.page';
import { AbilitiesPipe } from '../pipes/abilities.pipe';
import { PokemonBodyPipe } from '../pipes/pokemon-body.pipe';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { StylePokemonIdPipe } from '../pipes/style-pokemon-id.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonDetalhesPageRoutingModule,
    PokemonBodyPipe,
    CapitalizePipe,
    StylePokemonIdPipe,
    AbilitiesPipe
  ],

  declarations: [PokemonDetalhesPage]
})
export class PokemonDetalhesPageModule {}
