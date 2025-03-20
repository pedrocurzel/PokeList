import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pokemon-detalhes/:id',
    loadChildren: () => import('./pokemon-detalhes/pokemon-detalhes.module').then( m => m.PokemonDetalhesPageModule)
  },
  {
    path: 'pokemon-detalhes',
    loadChildren: () => import('./pokemon-detalhes/pokemon-detalhes.module').then( m => m.PokemonDetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
