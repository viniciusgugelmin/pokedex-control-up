import { PokemonsController } from "./PokemonsController";
import { getFreePokemonsUseCase } from "../../../../../useCases/GetFreePokemons";

const pokemonsController = new PokemonsController(getFreePokemonsUseCase);

export { pokemonsController };
