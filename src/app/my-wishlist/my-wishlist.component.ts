import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service"

@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.css']
})
export class MyWishlistComponent implements OnInit {

  pokemons: Pokemon[] = []
  selectedPokemon?: Pokemon 

  constructor(
    private PokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon
  }
 
  getPokemon(): void {
    this.PokemonService.getPokmons()
    .subscribe(pokemons => this.pokemons = pokemons)   //Observable.subscribe(): asynchronous approach
  }


}
