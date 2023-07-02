import getGenerationInfo from '@/api/getInfo';
import getSpecieInfo from '@/api/getInfo';
import getPokemonInfo from '@/api/getInfo';

import type { GenerationInfo } from '@/api/interfaces/GenerationInfo';
import type { Specie } from '@/api/interfaces/Specie';
import type { Pokemon } from '@/api/interfaces/Pokemon';

interface Props {
    generationNumber: number;
}

export default async function usePokemonInfo({ generationNumber }: Props) {
    const generationInfo = await getGenerationInfo<GenerationInfo>(
        `https://pokeapi.co/api/v2/generation/${generationNumber}/`
    );
    const { pokemon_species } = generationInfo || {
        pokemon_species: [{ url: '' }],
    };

    const randomNum = Math.floor(Math.random() * pokemon_species.length);

    const specieInfo = await getSpecieInfo<Specie>(
        pokemon_species[randomNum].url
    );
    const { color, varieties, name } = specieInfo || {
        color: { name: 'white' },
        varieties: [{ pokemon: { url: '' } }],
    };

    const pokemonInfo = await getPokemonInfo<Pokemon>(
        varieties[0].pokemon?.url
    );

    const { sprites } = pokemonInfo || {
        sprites: {
            other: {
                'official-artwork': { front_default: '' },
            },
        },
    };

    return { color, sprites, numPokemons: pokemon_species.length, name };
}
