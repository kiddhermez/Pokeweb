export interface GenerationInfo {
    pokemon_v2_pokemonspecies: PokemonV2Pokemonspecy[];
}

export interface PokemonV2Pokemonspecy {
    pokemon_v2_pokemoncolor: PokemonV2Pokemoncolor;
    pokemon_v2_pokemons: PokemonV2Pokemon[];
}

export interface PokemonV2Pokemoncolor {
    name: Name;
}

export enum Name {
    Black = 'black',
    Blue = 'blue',
    Brown = 'brown',
    Gray = 'gray',
    Green = 'green',
    Pink = 'pink',
    Purple = 'purple',
    Red = 'red',
    White = 'white',
    Yellow = 'yellow',
}

export interface PokemonV2Pokemon {
    name: string;
    pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[];
}

export interface PokemonV2Pokemonsprite {
    sprites: string;
}
