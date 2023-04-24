import { Pokemon } from "../../entities";

namespace PokemonsRepositoryDTO {
  export interface IPokemonsRepository {
    save(data: SaveDTO): SaveResponseDTO;

    findByUserIdAndPokemonId(
      data: FindByUserIdAndPokemonIdDTO
    ): FindByUserIdAndPokemonIdResponseDTO;

    findByUserId(data: FindByUserIdDTO): FindByUserIdResponseDTO;
  }

  export type SaveDTO = {
    id: number;
    userId: number;
    life: number;
  };

  export type SaveResponseDTO = Promise<void>;

  export type FindByUserIdAndPokemonIdDTO = {
    userId: number;
    pokemonId: number;
  };

  export type FindByUserIdAndPokemonIdResponseDTO = Promise<Pokemon>;

  export type FindByUserIdDTO = {
    userId: number;
  };

  export type FindByUserIdResponseDTO = Promise<Pokemon[]>;
}

export { PokemonsRepositoryDTO };
