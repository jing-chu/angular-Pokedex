import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { MyPokemomsComponent } from './my-pokemoms/my-pokemoms.component';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    MyPokemomsComponent,
    MyWishlistComponent,
    PageNotFoundComponent,
    PokemonDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
