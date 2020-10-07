export interface PokemonListState {
  loading: boolean;
  data: [];
  errorMessage: string;
  count: number;
}

export interface PokemonPageState {
  loading: boolean;
  data: {
    [key: string]: PokemonInfo;
  };
  errorMessage: string;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Ability {
  ability: {
    name: string;
  };
}

export interface Stat {
  stat: {
    name: string;
    url: string;
  };
  base_stat: number;
}

export interface PokemonInfo {
  abilities: [Ability];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | undefined;
    back_female: string | undefined;
    back_shiny: string | undefined;
    back_shiny_female: string | undefined;
    front_default: string | undefined;
    front_female: string | undefined;
    front_shiny: string | undefined;
    front_shiny_female: string | undefined;
  };
  stats: [Stat];
  types: [];
  weight: number;
}
