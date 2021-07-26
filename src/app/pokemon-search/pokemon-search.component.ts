import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'


import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service"


@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  pokemons$!: Observable<Pokemon>
  searchedPokmon: Pokemon | undefined
  name = ""
  //private searchTerms = new Subject<string>()

 

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) { }

  onSubmit(name: string) {
    this.pokemonService.searchPokemon(name)
    .subscribe(p => {this.searchedPokmon = p; console.log(this.searchedPokmon)})
   
  }

  saveIvCaught() {
    if(this.searchedPokmon) {
      this.pokemonService.addToIvCaught(this.searchedPokmon)
    }
    this.router.navigate(['/mypokemons', {name:this.name}])
  }

  saveWishlist() {
    if(this.searchedPokmon) {
      this.pokemonService.addToWishlistItems(this.searchedPokmon)
    }
    this.router.navigate(['/mywishlist', {name:this.name}])
  }

  ngOnInit(): void {
    
  }


 
 
}
