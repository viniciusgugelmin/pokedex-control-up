import { GetUserPokemonUseCaseDTO } from "./GetUserPokemonUseCaseDTO";
import { PokemonsRepositoryDTO } from "../../repositories/Pokemons/PokemonsRepositoryDTO";
import { PokemonNotFoundError } from "../../errors/PokemonNotFoundError";
import { PokeApiProviderDTO } from "../../providers/PokeApi/PokeApiProviderDTO";

class GetUserPokemonUseCase
  implements GetUserPokemonUseCaseDTO.IGetUserPokemonUseCase
{
  constructor(
    private readonly pokemonsRepository: PokemonsRepositoryDTO.IPokemonsRepository,
    private readonly pokeApiProvider: PokeApiProviderDTO.IPokeApiProvider
  ) {}

  public async execute({
    userId,
    pokemonId,
  }: GetUserPokemonUseCaseDTO.ExecuteDTO) {
    const pokemon = await this.pokemonsRepository.findByUserIdAndPokemonId({
      userId,
      pokemonId,
    });

    if (!pokemon) {
      throw new PokemonNotFoundError();
    }

    const pokemonData = await this.pokeApiProvider.getPokemon({
      nameOrId: pokemon.pokemonId,
    });

    const { base_stat: maxLife } = pokemonData.stats.find(
      ({ stat }) => stat.name === "hp"
    );
    const { base_stat: attack } = pokemonData.stats.find(
      ({ stat }) => stat.name === "attack"
    );
    const { base_stat: defense } = pokemonData.stats.find(
      ({ stat }) => stat.name === "defense"
    );

    return {
      ...pokemon,
      maxLife,
      attack,
      defense,
    };
  }
}

export { GetUserPokemonUseCase };
