import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'


import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service"

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon:Pokemon | undefined
  @Input() movesNames: string[] | undefined
  @Input() statsNames: string[] | undefined
  ivCaughtSet = this.pokemonService.getIvCaughtSet()
  wishlistSet = this.pokemonService.getWishlistSet()
  name = ""
 
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) { }

  ngOnInit(): void {  
   
  }

  saveIvCaught() {
    if(this.pokemon && !this.ivCaughtSet.has(this.pokemon.name) && !this.wishlistSet.has(this.pokemon.name)) {
      this.pokemonService.addToIvCaught(this.pokemon)
    } else if (this.pokemon && !this.ivCaughtSet.has(this.pokemon.name) && this.wishlistSet.has(this.pokemon.name)) {
      window.alert(`You have added ${this.pokemon.name} in the your wishlist!`) 
    } else if  (this.pokemon && this.ivCaughtSet.has(this.pokemon.name)) {
      window.alert(`${this.pokemon.name} has been in the list!`) 
    }
    this.router.navigate(['/mypokemons', {name:this.name}])
  }

  saveWishlist() {
    if(this.pokemon && !this.wishlistSet.has(this.pokemon.name) && !this.ivCaughtSet.has(this.pokemon.name)) {
      this.pokemonService.addToWishlistItems(this.pokemon)
    } else if (this.pokemon && !this.wishlistSet.has(this.pokemon.name) && this.ivCaughtSet.has(this.pokemon.name)) {
      window.alert(`You have caught ${this.pokemon.name}!`) 
    } else if (this.pokemon && this.wishlistSet.has(this.pokemon.name)) {
      window.alert(`${this.pokemon.name} has been in the list!`) 
    }
    this.router.navigate(['/mywishlist', {name:this.name}])
  }

}
