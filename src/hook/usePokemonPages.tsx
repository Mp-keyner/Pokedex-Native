import {useEffect, useRef, useState} from 'react';
import {PokedexApi} from '../api/PokedexApi';
import {
  PokemonResponse,
  Result,
  SimplePokemon,
} from '../interfaces/PokemonInterfaces';

export const usePokemonPages = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState<SimplePokemon[]>([]);
    const nextPagesUrl = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40');
   
    const loadPokemons = async () => {
      setIsLoading(true);
      const resp = await PokedexApi.get<PokemonResponse>(nextPagesUrl.current);
      nextPagesUrl.current = resp.data.next;
      PokemonList(resp.data.results);
    };
   
    const PokemonList = (pokemonList: Result[]) => {
      const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
        const urlParts = url.split('/');
        const id = urlParts[urlParts.length - 2];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        return {
          id,
          picture,
          name,
        };
      });
      setPokemonList(prevPokemonList => [...prevPokemonList, ...newPokemonList]);
      setIsLoading(false);
    };
   
    useEffect(() => {
      loadPokemons();
    }, []);
   
    return {
      pokemonList,
      isLoading,
      loadPokemons
    }
   };
   