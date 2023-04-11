namespace GetFreePokemonsUseCaseDTO {
  export interface IGetFreePokemonsUseCase {
    execute(): ExecuteResponseDTO;
  }

  export type ExecuteResponseDTO = Promise<
    {
      name: string;
    }[]
  >;
}

export { GetFreePokemonsUseCaseDTO };
