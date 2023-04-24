namespace CatchPokemonUseCaseDTO {
  export interface ICatchPokemonUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    nameOrId: string | number;
    userId: number;
  };

  export type ExecuteResponseDTO = Promise<void>;
}

export { CatchPokemonUseCaseDTO };
