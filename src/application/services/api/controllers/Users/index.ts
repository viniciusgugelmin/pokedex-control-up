import { UsersController } from "./UsersController";
import { registerUserUseCase } from "../../../../../useCases/RegisterUser";
import { logInUserUseCase } from "../../../../../useCases/LogInUser";
import { getUserPokemonsUseCase } from "../../../../../useCases/GetUserPokemons";
import { getUserPokemonUseCase } from "../../../../../useCases/GetUserPokemon";

const usersController = new UsersController(
  registerUserUseCase,
  logInUserUseCase,
  getUserPokemonsUseCase,
  getUserPokemonUseCase
);

export { usersController };
