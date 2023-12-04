export interface PokemonResponse {
  count: number;
  next: string;
  previus: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface SimplePokemon {
  id: string;
  name: string;
  picture: string;
  color?: string;
}
