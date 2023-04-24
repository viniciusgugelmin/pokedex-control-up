import { Pokemon } from "../../entities";

namespace DiscardUserPokemonUseCaseDTO {
  export interface IDiscardUserPokemonUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    userId: number;
    pokemonId: number;
  };

  export type ExecuteResponseDTO = Promise<void>;
}

export { DiscardUserPokemonUseCaseDTO };
