export interface Pokemon {
  id: number;
  name: string;
  moves: Move[]
  stats: Stat[]
}

interface Move {
  move: {
    name:string,
  }
}

interface Stat {
 stat: {
   name:string
 }
}


export interface Page {
  count: number,
  next: string,
  previous: string,
  results: PokemonPage[]
}

interface PokemonPage {
  name: string;
  url: string
}