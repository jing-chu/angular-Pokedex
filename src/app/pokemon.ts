export interface Pokemon {
  id: number;
  name: string;
}

export interface PokemonPage {
  name: string;
  url: string
}

export interface Page {
  count: number,
  next: string,
  previous: string,
  results: PokemonPage[]
}