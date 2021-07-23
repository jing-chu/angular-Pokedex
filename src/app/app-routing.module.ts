import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component'
import { MyPokemomsComponent } from './my-pokemoms/my-pokemoms.component'
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component'

const routes: Routes = [
  { path: 'search', component: PokemonSearchComponent },
  { path: 'mypokemons', component: MyPokemomsComponent},
  { path: 'mywishlist', component: MyWishlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
