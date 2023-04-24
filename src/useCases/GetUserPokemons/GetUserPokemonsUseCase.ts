import { GetUserPokemonsUseCaseDTO } from "./GetUserPokemonsUseCaseDTO";
import { PokemonsRepositoryDTO } from "../../repositories/Pokemons/PokemonsRepositoryDTO";

class GetUserPokemonsUseCase
  implements GetUserPokemonsUseCaseDTO.IGetUserPokemonsUseCase
{
  constructor(
    private readonly pokemonsRepository: PokemonsRepositoryDTO.IPokemonsRepository
  ) {}

  public async execute({ userId }: GetUserPokemonsUseCaseDTO.ExecuteDTO) {
    return this.pokemonsRepository.findByUserId({ userId });
  }
}

export { GetUserPokemonsUseCase };
