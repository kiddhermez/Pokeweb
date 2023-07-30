export interface Sprites {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    other: Other;
    versions: Versions;
}

export interface Other {
    dream_world: DreamWorld;
    home: Home;
    'official-artwork': OfficialArtwork;
}

export interface DreamWorld {
    front_default: string | null;
    front_female: string | null;
}

export interface Home {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface OfficialArtwork {
    front_default: string | null;
    front_shiny: string | null;
}

export interface Versions {
    'generation-i': GenerationI;
    'generation-ii': GenerationIi;
    'generation-iii': GenerationIii;
    'generation-iv': GenerationIv;
    'generation-v': GenerationV;
    'generation-vi': GenerationVi;
    'generation-vii': GenerationVii;
    'generation-viii': GenerationViii;
}

export interface GenerationI {
    'red-blue': RedBlue;
    yellow: Yellow;
}

export interface RedBlue {
    front_default: string | null;
    front_gray: string | null;
    back_default: string | null;
    back_gray: string | null;
    front_transparent: string | null;
    back_transparent: string | null;
}

export interface Yellow {
    front_default: string | null;
    front_gray: string | null;
    back_default: string | null;
    back_gray: string | null;
    front_transparent: string | null;
    back_transparent: string | null;
}

export interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Silver;
}

export interface Crystal {
    front_default: string | null;
    front_shiny: string | null;
    back_default: string | null;
    back_shiny: string | null;
    front_transparent: string | null;
    front_shiny_transparent: string | null;
    back_transparent: string | null;
    back_shiny_transparent: string | null;
}

export interface Gold {
    front_default: string | null;
    front_shiny: string | null;
    back_default: string | null;
    back_shiny: string | null;
    front_transparent: string | null;
}

export interface Silver {
    front_default: string | null;
    front_shiny: string | null;
    back_default: string | null;
    back_shiny: string | null;
    front_transparent: string | null;
}

export interface GenerationIii {
    emerald: Emerald;
    'firered-leafgreen': FireredLeafgreen;
    'ruby-sapphire': RubySapphire;
}

export interface Emerald {
    front_default: string | null;
    front_shiny: string | null;
}

export interface FireredLeafgreen {
    front_default: string | null;
    front_shiny: string | null;
    back_default: string | null;
    back_shiny: string | null;
}

export interface RubySapphire {
    front_default: string | null;
    front_shiny: string | null;
    back_default: string | null;
    back_shiny: string | null;
}

export interface GenerationIv {
    'diamond-pearl': DiamondPearl;
    'heartgold-soulsilver': HeartgoldSoulsilver;
    platinum: Platinum;
}

export interface DiamondPearl {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
}

export interface HeartgoldSoulsilver {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
}

export interface Platinum {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
}

export interface GenerationV {
    'black-white': BlackWhite;
}

export interface BlackWhite {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    animated: Animated;
}

export interface Animated {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
}

export interface GenerationVi {
    'omegaruby-alphasapphire': OmegarubyAlphasapphire;
    'x-y': XY;
}

export interface OmegarubyAlphasapphire {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface XY {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface GenerationVii {
    'ultra-sun-ultra-moon': UltraSunUltraMoon;
    icons: Icons;
}

export interface UltraSunUltraMoon {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface Icons {
    front_default: string | null;
    front_female: string | null;
}

export interface GenerationViii {
    icons: Icons2;
}

export interface Icons2 {
    front_default: string | null;
    front_female: string | null;
}
