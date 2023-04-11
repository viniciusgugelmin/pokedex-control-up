import { CatchPokemonUseCaseDTO } from "./CatchPokemonUseCaseDTO";
import { PokeApiProviderDTO } from "../../providers/PokeApi/PokeApiProviderDTO";

class CatchPokemonUseCase
  implements CatchPokemonUseCaseDTO.ICatchPokemonUseCase
{
  constructor(
    private readonly pokeApiProvider: PokeApiProviderDTO.IPokeApiProvider
  ) {}

  public async execute({ nameOrId }) {
    const pokemon = await this.pokeApiProvider.getPokemon({ nameOrId });

    // TODO: Save pokemon in database
    console.log(pokemon);
  }
}

export { CatchPokemonUseCase };
