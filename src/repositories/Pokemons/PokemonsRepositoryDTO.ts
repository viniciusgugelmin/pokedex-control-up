import { Pokemon } from "../../entities";

namespace PokemonsRepositoryDTO {
  export interface IPokemonsRepository {
    save(data: SaveDTO): SaveResponseDTO;

    findByUserIdAndPokemonId(
      data: FindByUserIdAndPokemonIdDTO
    ): FindByUserIdAndPokemonIdResponseDTO;

    findByUserId(data: FindByUserIdDTO): FindByUserIdResponseDTO;

    deleteUserPokemon(data: DeleteUserPokemonDTO): DeleteUserPokemonResponseDTO;

    updateUserPokemon(data: UpdateUserPokemonDTO): UpdateUserPokemonResponseDTO;
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

  export type FindByUserIdAndPokemonIdResponseDTO = Promise<Pokemon | null>;

  export type FindByUserIdDTO = {
    userId: number;
  };

  export type FindByUserIdResponseDTO = Promise<Pokemon[]>;

  export type DeleteUserPokemonDTO = {
    userId: number;
    pokemonId: number;
  };

  export type DeleteUserPokemonResponseDTO = Promise<void>;

  export type UpdateUserPokemonDTO = {
    userId: number;
    pokemonId: number;
    life: number;
  };

  export type UpdateUserPokemonResponseDTO = Promise<Pokemon>;
}

export { PokemonsRepositoryDTO };
