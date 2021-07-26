import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'


import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service"



@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  searchedPokmon: Pokemon | undefined
  name = ""
  ivCaughtSet = this.pokemonService.getIvCaughtSet()
  wishlistSet = this.pokemonService.getWishlistSet()

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) { }

  onSubmit(name: string) {
    this.pokemonService.searchPokemon(name)
    .subscribe(p => {this.searchedPokmon = p})
   
  }

  saveIvCaught() {
    if(this.searchedPokmon && !this.ivCaughtSet.has(this.searchedPokmon.name) && !this.wishlistSet.has(this.searchedPokmon.name)) {
      this.pokemonService.addToIvCaught(this.searchedPokmon)
    } else if (this.searchedPokmon && !this.ivCaughtSet.has(this.searchedPokmon.name) && this.wishlistSet.has(this.searchedPokmon.name)) {
      window.alert(`You have added ${this.searchedPokmon.name} in the your wishlist!`) 
    } else if  (this.searchedPokmon && this.ivCaughtSet.has(this.searchedPokmon.name)) {
      window.alert(`${this.searchedPokmon.name} has been in the list!`) 
    }
    this.router.navigate(['/mypokemons', {name:this.name}])
  }

  saveWishlist() {
    if(this.searchedPokmon && !this.wishlistSet.has(this.searchedPokmon.name) && !this.ivCaughtSet.has(this.searchedPokmon.name)) {
      this.pokemonService.addToWishlistItems(this.searchedPokmon)
    } else if (this.searchedPokmon && !this.wishlistSet.has(this.searchedPokmon.name) && this.ivCaughtSet.has(this.searchedPokmon.name)) {
      window.alert(`You have caught ${this.searchedPokmon.name}!`) 
    } else if (this.searchedPokmon && this.wishlistSet.has(this.searchedPokmon.name)) {
      window.alert(`${this.searchedPokmon.name} has been in the list!`) 
    }
    this.router.navigate(['/mywishlist', {name:this.name}])
  }

  ngOnInit(): void {
    //this.pokemonService.getPokmons()
    //.subscribe(arr => console.log(arr))
  }


 
 
}
