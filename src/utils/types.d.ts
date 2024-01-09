export interface Pokemon {
  name: string;
  region_dex_no: Number;
  national_dex_no: Number;
  types: string[];
  moves: [];
  large_sprite: string;
  dex_sprite: string;
  abilities: Ability[];
  stats: {
    name: string;
    base_stat: number;
  }[];
}

export interface Ability {
  ability: {
    name: string,
    url: string
  }
  is_hidden: Boolean
}

export interface EvoLine {
  name: string;
  national_dex_no: Number;
  trigger: {
    name: string;
    min_level: Number;
  }
  sprite: string;
}

export interface Stat {
  base_stat: Number;
  name: string;
}