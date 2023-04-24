import { Pokemon } from "../../entities";

namespace GetUserPokemonUseCaseDTO {
  export interface IGetUserPokemonUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    userId: number;
    pokemonId: number;
  };

  export type ExecuteResponseDTO = Promise<
    Pokemon & { maxLife: number; attack: number; defense: number }
  >;
}

export { GetUserPokemonUseCaseDTO };
