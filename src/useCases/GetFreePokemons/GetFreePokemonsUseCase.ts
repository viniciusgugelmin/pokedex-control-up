import { PokeApiProviderDTO } from "../../providers/PokeApi/PokeApiProviderDTO";
import { GetFreePokemonsUseCaseDTO } from "./GetFreePokemonsUseCaseDTO";

class GetFreePokemonsUseCase
  implements GetFreePokemonsUseCaseDTO.IGetFreePokemonsUseCase
{
  constructor(
    private readonly pokeApiProvider: PokeApiProviderDTO.IPokeApiProvider
  ) {}

  public async execute() {
    const { count: pokemonsTotal, results: pokemons } =
      await this.pokeApiProvider.getPokemonList({});

    const pokemonsPerHour = pokemonsTotal / 24;
    const actualHour = new Date().getHours();

    const pokemonsToBeDisplayed = pokemons.slice(
      actualHour * pokemonsPerHour,
      (actualHour + 1) * pokemonsPerHour
    );

    return pokemonsToBeDisplayed.map(({ name }) => ({ name }));
  }
}

export { GetFreePokemonsUseCase };
