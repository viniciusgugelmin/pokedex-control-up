import { GetFreePokemonsUseCase } from "./GetFreePokemonsUseCase";
import { pokeApiProvider } from "../../providers/PokeApi";

const getFreePokemonsUseCase = new GetFreePokemonsUseCase(pokeApiProvider);

export { getFreePokemonsUseCase };
