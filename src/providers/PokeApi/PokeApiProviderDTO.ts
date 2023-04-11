namespace PokeApiProviderDTO {
  export interface IPokeApiProvider {
    getPokemonList(data: GetPokemonListDTO): GetPokemonListResponseDTO;

    getPokemon(data: GetPokemonDTO): GetPokemonResponseDTO;
  }

  export type GetPokemonListDTO = {
    offset?: number;
    limit?: number;
  };

  export type GetPokemonListResponseDTO = Promise<{
    count: number;
    next: string | null;
    previous: string | null;
    results: {
      name: string;
      url: string;
    }[];
  }>;

  export type GetPokemonDTO = {
    nameOrId: string | number;
  };

  export type GetPokemonResponseDTO = Promise<{
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];
    base_experience: number;
    forms: {
      name: string;
      url: string;
    }[];
    game_indices: {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }[];
    height: number;
    held_items: {
      item: {
        name: string;
        url: string;
      };
      version_details: {
        rarity: number;
        version: {
          name: string;
          url: string;
        };
      }[];
    }[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: {
      move: {
        name: string;
        url: string;
      };
      version_group_details: {
        level_learned_at: number;
        move_learn_method: {
          name: string;
          url: string;
        };
        version_group: {
          name: string;
          url: string;
        };
      };
    }[];
    name: string;
    order: number;
    species: {
      name: string;
      url: string;
    };
    sprites: Object;
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    weight: number;
  }>;
}

export { PokeApiProviderDTO };
