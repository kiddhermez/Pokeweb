import getGenerationInfo from '@/api/getInfo';

import type { GenerationInfo } from '@/api/interfaces/GenerationInfo';
import type { Sprites } from '../interfaces/Sprites';

interface Props {
    generationNumber: number;
}

const query = (generationId: number) => `{
    pokemon_v2_pokemonspecies(where: {generation_id: {_eq: ${generationId}}}) {
      pokemon_v2_pokemons {
        pokemon_v2_pokemonsprites {
          sprites
        }
        name
      }
      pokemon_v2_pokemoncolor {
        name
      }
    }
  }`;

export default async function usePokemonInfo({ generationNumber }: Props) {
    const { pokemon_v2_pokemonspecies: species } =
        await getGenerationInfo<GenerationInfo>(query(generationNumber));

    const randomNumber = Math.floor(Math.random() * species.length);
    const {
        pokemon_v2_pokemons: PokemonInfo,
        pokemon_v2_pokemoncolor: colorInfo,
    } = species[randomNumber];
    const sprites: Sprites = JSON.parse(
        PokemonInfo[0].pokemon_v2_pokemonsprites[0].sprites
    );

    return {
        color: colorInfo.name,
        sprites,
        numPokemons: species.length,
        name: PokemonInfo[0].name,
    };
}
