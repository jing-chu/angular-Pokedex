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
  pokemons = this.PokemonService.getIvCaughtItems()
  selectedPokemon?: Pokemon 

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private PokemonService: PokemonService
  ) { }

  ngOnInit(): void {

  }

  delete(pokemon: Pokemon) {
    this.PokemonService.deleteIvCaughtItem(pokemon)
  }


  goBack(): void {
    this.location.back()
  }

}



