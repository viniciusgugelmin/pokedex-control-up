import { Pokemon } from "../../entities";

namespace GetUserPokemonsUseCaseDTO {
  export interface IGetUserPokemonsUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    userId: number;
  };

  export type ExecuteResponseDTO = Promise<Pokemon[]>;
}

export { GetUserPokemonsUseCaseDTO };
