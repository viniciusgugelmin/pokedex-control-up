import { CatchPokemonUseCaseDTO } from "./CatchPokemonUseCaseDTO";
import { PokeApiProviderDTO } from "../../providers/PokeApi/PokeApiProviderDTO";
import { PokemonNotFoundError } from "../../errors/PokemonNotFoundError";
import { PokemonsRepositoryDTO } from "../../repositories/Pokemons/PokemonsRepositoryDTO";

class CatchPokemonUseCase
  implements CatchPokemonUseCaseDTO.ICatchPokemonUseCase
{
  constructor(
    private readonly pokeApiProvider: PokeApiProviderDTO.IPokeApiProvider,
    private readonly pokemonsRepository: PokemonsRepositoryDTO.IPokemonsRepository
  ) {}

  public async execute({
    nameOrId,
    userId,
  }: CatchPokemonUseCaseDTO.ExecuteDTO) {
    const pokemon = await this.pokeApiProvider.getPokemon({ nameOrId });
    const { count: pokemonsTotal, results: pokemons } =
      await this.pokeApiProvider.getPokemonList({});

    const pokemonsPerHour = Math.floor(pokemonsTotal / 24);
    const actualHour = new Date().getHours();

    const freePokemons = pokemons.slice(
      actualHour * pokemonsPerHour,
      (actualHour + 1) * pokemonsPerHour
    );

    const isPokemonFree = freePokemons.some(
      (pokemon) => pokemon.name === nameOrId
    );

    if (!isPokemonFree) {
      throw new PokemonNotFoundError("Pokemon is not free");
    }

    const { base_stat: pokemonLife } = pokemon.stats.find(
      ({ stat }) => stat.name === "hp"
    );

    await this.pokemonsRepository.save({
      id: pokemon.id,
      userId,
      life: pokemonLife,
    });
  }
}

export { CatchPokemonUseCase };
