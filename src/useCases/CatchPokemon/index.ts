import { CatchPokemonUseCase } from "./CatchPokemonUseCase";
import { pokeApiProvider } from "../../providers/PokeApi";

const catchPokemonUseCase = new CatchPokemonUseCase(pokeApiProvider);

export { catchPokemonUseCase };
