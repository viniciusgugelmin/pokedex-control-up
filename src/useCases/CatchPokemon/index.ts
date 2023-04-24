import { CatchPokemonUseCase } from "./CatchPokemonUseCase";
import { pokeApiProvider } from "../../providers/PokeApi";
import { pokemonsRepository } from "../../repositories/Pokemons";

const catchPokemonUseCase = new CatchPokemonUseCase(
  pokeApiProvider,
  pokemonsRepository
);

export { catchPokemonUseCase };
