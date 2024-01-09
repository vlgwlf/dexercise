import { Pokemon } from "./types";

// using anys here because of unpredictability of the api shape
// however we do know that it should return a Pokemon type object
export const apiToPokemonFormat = (pokemon_data: any): Pokemon | null => {
  if (pokemon_data) {
    let formatted: Pokemon = {
      name: pokemon_data.name,
      abilities: pokemon_data.abilities,
      region_dex_no: 0,
      national_dex_no: pokemon_data.id,
      types: pokemon_data.types.map((type: any) => (
        type.type.name
      )),
      moves: pokemon_data.moves.map((move: any) => move.move.name),
      large_sprite: pokemon_data.sprites.other['official-artwork'].front_default,
      dex_sprite: pokemon_data.sprites.versions['generation-viii'].icons.front_default,
      stats: pokemon_data.stats.map((stat: any) => ({
        base_stat: stat.base_stat,
        name: stat.stat.name
      }))
    }
  
    return formatted
  }

  return null
};