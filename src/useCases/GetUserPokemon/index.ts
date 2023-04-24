import { GetUserPokemonUseCase } from "./GetUserPokemonUseCase";
import { pokemonsRepository } from "../../repositories/Pokemons";
import { pokeApiProvider } from "../../providers/PokeApi";

const getUserPokemonUseCase = new GetUserPokemonUseCase(
  pokemonsRepository,
  pokeApiProvider
);

export { getUserPokemonUseCase };
