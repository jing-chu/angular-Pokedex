import { Component, OnInit } from '@angular/core';
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



