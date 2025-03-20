import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetalhesPage } from './pokemon-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDetalhesPageRoutingModule {}
