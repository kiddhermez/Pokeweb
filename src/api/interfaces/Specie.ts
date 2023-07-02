export interface Specie {
    base_happiness: number;
    capture_rate: number;
    color: Color;
    egg_groups: Info[];
    evolution_chain: EvolutionChain;
    evolves_from_species: null;
    flavor_text_entries: FlavorTextEntry[];
    form_descriptions: any[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: Genus[];
    generation: Info;
    growth_rate: Info;
    habitat: Info;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: Name[];
    order: number;
    pal_park_encounters: PalParkEncounter[];
    pokedex_numbers: PokedexNumber[];
    shape: Info;
    varieties: Variety[];
}

export interface Color {
    name:
        | 'black'
        | 'blue'
        | 'brown'
        | 'gray'
        | 'green'
        | 'pink'
        | 'purple'
        | 'red'
        | 'white'
        | 'yellow';
    url: string;
}

export interface Info {
    name: string;
    url: string;
}

export interface EvolutionChain {
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language: Info;
    version: Info;
}

export interface Genus {
    genus: string;
    language: Info;
}

export interface Name {
    language: Info;
    name: string;
}

export interface PalParkEncounter {
    area: Info;
    base_score: number;
    rate: number;
}

export interface PokedexNumber {
    entry_number: number;
    pokedex: Info;
}

export interface Variety {
    is_default: boolean;
    pokemon: Info;
}
