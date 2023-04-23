import { CatchPokemonUseCaseDTO } from "./CatchPokemonUseCaseDTO";
import { PokeApiProviderDTO } from "../../providers/PokeApi/PokeApiProviderDTO";
import { PokemonNotFoundError } from "../../errors/PokemonNotFoundError";

class CatchPokemonUseCase
  implements CatchPokemonUseCaseDTO.ICatchPokemonUseCase
{
  constructor(
    private readonly pokeApiProvider: PokeApiProviderDTO.IPokeApiProvider
  ) {}

  public async execute({ nameOrId }) {
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
      throw new PokemonNotFoundError();
    }

    // TODO: Save pokemon in database
  }
}

export { CatchPokemonUseCase };
