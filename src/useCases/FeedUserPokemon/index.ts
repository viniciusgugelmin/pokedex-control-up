import { FeedUserPokemonUseCase } from "./FeedUserPokemonUseCase";
import { pokemonsRepository } from "../../repositories/Pokemons";
import { pokeApiProvider } from "../../providers/PokeApi";

const feedUserPokemonUseCase = new FeedUserPokemonUseCase(
  pokemonsRepository,
  pokeApiProvider
);

export { feedUserPokemonUseCase };
