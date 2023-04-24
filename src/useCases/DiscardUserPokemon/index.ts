import { DiscardUserPokemonUseCase } from "./DiscardUserPokemonUseCase";
import { pokemonsRepository } from "../../repositories/Pokemons";

const discardUserPokemonUseCase = new DiscardUserPokemonUseCase(
  pokemonsRepository
);

export { discardUserPokemonUseCase };
