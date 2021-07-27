import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'


import { Pokemon, PokemonPage, Page } from "../pokemon";
import { PokemonService } from "../pokemon.service"




@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {
  allPokemonsName: string[] = []
  searchedPokmon: Pokemon | undefined
  name = ""
  next = ""
  previous = ""
 

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) { }

  onSubmit(name: string) {
    if (!name) {
      window.alert("You need to insert a name of pokemon.")
      return
    }
    this.pokemonService.searchPokemon(name)
    .subscribe(p => {this.searchedPokmon = p})
   
  }

  getDetailInfo(name: string) {
    this.pokemonService.searchPokemon(name)
    .subscribe(p => {this.searchedPokmon = p})
  }

  getNextPage() {
    this.pokemonService.getPagesData(this.next)
      .subscribe(data => {
        this.allPokemonsName = data.results.map(x=>x.name)
        this.next=data.next
        this.previous=data.previous
      })  
  }

  getPreviousPage(){
    this.pokemonService.getPagesData(this.previous)
      .subscribe(data => {
        this.allPokemonsName = data.results.map(x=>x.name)
        this.next=data.next
        this.previous=data.previous
      })  
  }

  ngOnInit(): void {
    this.pokemonService.getPagesData()
    .subscribe(data => {
      this.allPokemonsName = data.results.map(x=>x.name)
      this.next = data.next
      this.previous = data.previous
    })
  }
 
}
