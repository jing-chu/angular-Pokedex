import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';


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
  searchedPokmon?: Pokemon | undefined
  name = ""
  //private searchTerms = new Subject<string>()

 

  constructor(
    private pokemonService: PokemonService,
  ) { }

  onSubmit(name: string) {
    this.pokemonService.searchPokemon(name)
    .subscribe(p => {this.searchedPokmon = p; console.log(this.searchedPokmon)})
   
  }

  //search(term:string):void {
  //  this.searchTerms.next(term)
  //}

  ngOnInit(): void {
   
    //this.pokemons$ = this.searchTerms.pipe(
    // wait 300ms after each keystroke before considering the term
    //debounceTime(300),

    // ignore new term if same as previous term
    //distinctUntilChanged(),

    // switch to new search observable each time the term changes
    //switchMap((term: string) => this.pokemonService.searchPokemon(term)),  
    //)
    
    
  }


 
 
}
