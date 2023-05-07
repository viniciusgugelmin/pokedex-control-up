import { FeedUserPokemonUseCaseDTO } from "./FeedUserPokemonUseCaseDTO";
import { PokemonsRepositoryDTO } from "../../repositories/Pokemons/PokemonsRepositoryDTO";
import { PokemonNotFoundError } from "../../errors/PokemonNotFoundError";
import { PokeApiProviderDTO } from "../../providers/PokeApi/PokeApiProviderDTO";

class FeedUserPokemonUseCase
  implements FeedUserPokemonUseCaseDTO.IFeedUserPokemonUseCase
{
  constructor(
    private readonly pokemonsRepository: PokemonsRepositoryDTO.IPokemonsRepository,
    private readonly pokeApiProvider: PokeApiProviderDTO.IPokeApiProvider
  ) {}

  public async execute({
    userId,
    pokemonId,
    food,
  }: FeedUserPokemonUseCaseDTO.ExecuteDTO) {
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

    if (pokemon.life >= maxLife) {
      return {
        ...pokemon,
        maxLife,
        attack,
        defense,
        speech: "I'm full!",
      };
    }

    const foodHealing = {
      seed: 0.1,
      apple: 0.3,
      watermelon: 0.5,
    };
    const newLife = maxLife * foodHealing[food] + pokemon.life;

    const pokemonUpdated = await this.pokemonsRepository.updateUserPokemon({
      userId,
      pokemonId,
      life: newLife > maxLife ? maxLife : parseInt(newLife.toString()),
    });

    return {
      ...pokemonUpdated,
      maxLife,
      attack,
      defense,
      speech: "Yummy!",
    };
  }
}

export { FeedUserPokemonUseCase };
