import { GetUserPokemonsUseCase } from "./GetUserPokemonsUseCase";
import { pokemonsRepository } from "../../repositories/Pokemons";

const getUserPokemonsUseCase = new GetUserPokemonsUseCase(pokemonsRepository);

export { getUserPokemonsUseCase };
