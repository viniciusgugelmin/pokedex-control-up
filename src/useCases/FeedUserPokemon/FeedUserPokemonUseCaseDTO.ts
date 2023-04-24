import { Pokemon } from "../../entities";

namespace FeedUserPokemonUseCaseDTO {
  export interface IFeedUserPokemonUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    userId: number;
    pokemonId: number;
    food: "seed" | "apple" | "watermelon";
  };

  export type ExecuteResponseDTO = Promise<
    Pokemon & {
      maxLife: number;
      attack: number;
      defense: number;
      speech: string;
    }
  >;
}

export { FeedUserPokemonUseCaseDTO };
