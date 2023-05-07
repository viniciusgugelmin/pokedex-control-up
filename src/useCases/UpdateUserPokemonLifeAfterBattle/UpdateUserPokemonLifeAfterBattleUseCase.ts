import { UpdateUserPokemonLifeAfterBattleUseCaseDTO } from "./UpdateUserPokemonLifeAfterBattleUseCaseDTO";
import { PokemonNotFoundError } from "../../errors/PokemonNotFoundError";
import { PokemonsRepositoryDTO } from "../../repositories/Pokemons/PokemonsRepositoryDTO";

class UpdateUserPokemonLifeAfterBattleUseCase
  implements
    UpdateUserPokemonLifeAfterBattleUseCaseDTO.IUpdateUserPokemonLifeAfterBattleUseCase
{
  constructor(
    private readonly pokemonsRepository: PokemonsRepositoryDTO.IPokemonsRepository
  ) {}

  public async execute({
    userId,
    pokemonId,
    life,
  }: UpdateUserPokemonLifeAfterBattleUseCaseDTO.ExecuteDTO): UpdateUserPokemonLifeAfterBattleUseCaseDTO.ExecuteResponseDTO {
    const pokemon = await this.pokemonsRepository.findByUserIdAndPokemonId({
      userId,
      pokemonId,
    });

    if (!pokemon) {
      throw new PokemonNotFoundError();
    }

    await this.pokemonsRepository.updateUserPokemon({
      userId,
      pokemonId,
      life: life,
    });
  }
}

export { UpdateUserPokemonLifeAfterBattleUseCase };
