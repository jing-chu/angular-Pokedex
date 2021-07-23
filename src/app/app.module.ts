import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MyPokemomsComponent } from './my-pokemoms/my-pokemoms.component';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    PokemonDetailComponent,
    MyPokemomsComponent,
    MyWishlistComponent,

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
