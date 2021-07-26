import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component'
import { MyPokemomsComponent } from './my-pokemoms/my-pokemoms.component'
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component'
import { PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },   //default route
  { path: 'search', component: PokemonSearchComponent },
  { path: 'mypokemons', component: MyPokemomsComponent},
  { path: 'mywishlist', component: MyWishlistComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
