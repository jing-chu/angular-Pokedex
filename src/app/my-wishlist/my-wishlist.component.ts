import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { Location } from '@angular/common'

import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service"

@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.css']
})
export class MyWishlistComponent implements OnInit {
  pokemons = this.PokemonService.getWishlistItems()
  selectedPokemon?: Pokemon 

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private PokemonService: PokemonService
  ) { }

  ngOnInit(): void {

  }
 

  goBack(): void {
    this.location.back()
  }

}


