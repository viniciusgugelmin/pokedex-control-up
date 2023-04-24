import { PokemonsController } from "./PokemonsController";
import { getFreePokemonsUseCase } from "../../../../../useCases/GetFreePokemons";
import { catchPokemonUseCase } from "../../../../../useCases/CatchPokemon";

const pokemonsController = new PokemonsController(
  getFreePokemonsUseCase,
  catchPokemonUseCase
);

export { pokemonsController };
