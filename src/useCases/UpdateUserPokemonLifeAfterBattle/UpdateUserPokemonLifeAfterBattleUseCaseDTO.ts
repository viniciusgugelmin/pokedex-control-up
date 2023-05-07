namespace UpdateUserPokemonLifeAfterBattleUseCaseDTO {
  export interface IUpdateUserPokemonLifeAfterBattleUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    userId: number;
    pokemonId: number;
    life: number;
  };

  export type ExecuteResponseDTO = Promise<void>;
}

export { UpdateUserPokemonLifeAfterBattleUseCaseDTO };
