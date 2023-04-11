namespace GetFreePokemonsUseCaseDTO {
  export interface IGetFreePokemonsUseCase {
    execute(): ExecuteResponseDTO;
  }

  export type ExecuteResponseDTO = Promise<string[]>;
}

export { GetFreePokemonsUseCaseDTO };
