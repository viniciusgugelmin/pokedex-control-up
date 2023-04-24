import { DiscardUserPokemonUseCaseDTO } from "./DiscardUserPokemonUseCaseDTO";
import { PokemonsRepositoryDTO } from "../../repositories/Pokemons/PokemonsRepositoryDTO";
import { PokemonNotFoundError } from "../../errors/PokemonNotFoundError";

class DiscardUserPokemonUseCase
  implements DiscardUserPokemonUseCaseDTO.IDiscardUserPokemonUseCase
{
  constructor(
    private readonly pokemonsRepository: PokemonsRepositoryDTO.IPokemonsRepository
  ) {}

  public async execute({
    userId,
    pokemonId,
  }: DiscardUserPokemonUseCaseDTO.ExecuteDTO) {
    const userPokemon = await this.pokemonsRepository.findByUserIdAndPokemonId({
      userId,
      pokemonId,
    });

    if (!userPokemon) {
      throw new PokemonNotFoundError();
    }

    await this.pokemonsRepository.deleteUserPokemon({ userId, pokemonId });
  }
}

export { DiscardUserPokemonUseCase };
