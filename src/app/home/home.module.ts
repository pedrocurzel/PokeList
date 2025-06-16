import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { StylePokemonIdPipe } from '../pipes/style-pokemon-id.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    CapitalizePipe,
    StylePokemonIdPipe
  ],
  declarations: [HomePage, PokemonCardComponent]
})
export class HomePageModule {}
