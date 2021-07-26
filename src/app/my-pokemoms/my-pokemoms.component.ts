import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Location } from '@angular/common'

import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service"

@Component({
  selector: 'app-my-pokemoms',
  templateUrl: './my-pokemoms.component.html',
  styleUrls: ['./my-pokemoms.component.css']
})
export class MyPokemomsComponent implements OnInit {
  pokemons: Pokemon[] = []
  selectedPokemon?: Pokemon 

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private PokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  //NOT: this.heroes = this.heroService.getHeroes();
  getPokemon(): void {
    const name = this.route.snapshot.paramMap.get('name')
    console.log("NAME QUERYPARAMS", name)
    console.log("ARRAY", this.pokemons)
    if (name) {
      this.PokemonService.searchPokemon(name)
    .subscribe(pokemon => this.pokemons.push(pokemon))   //Observable.subscribe(): asynchronous approach
    }
  }

  goBack(): void {
    this.location.back()
  }

}



