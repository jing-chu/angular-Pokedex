import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'


import { Pokemon } from './pokemon'
import { POKEMON } from './mock-pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon'
  ivCaughtItems: Pokemon[] = []

  constructor(
    private http: HttpClient
  ) { }

  getPokmons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl) //returns an observable of pokemon arrays
      .pipe(
        catchError(this.handleError<Pokemon[]>('getPokemons',[]))
      )   
  }

  getIvCaughtItems() {
    return this.ivCaughtItems
  }
  
 searchPokemon(name: string):Observable<Pokemon> {
    const url= `${this.pokemonsUrl}/${name}`
    return this.http.get<Pokemon>(url)   //returns an observable of object
      .pipe(
        catchError(this.handleError<Pokemon>(`searchPokemons name=${name}`))
      )
  }

  addToIvCaught(pokemon: Pokemon) {
    this.ivCaughtItems.push(pokemon)
  }

/**   
   * 
   */
  

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
