import { UsersController } from "./UsersController";
import { registerUserUseCase } from "../../../../../useCases/RegisterUser";
import { logInUserUseCase } from "../../../../../useCases/LogInUser";
import { getUserPokemonsUseCase } from "../../../../../useCases/GetUserPokemons";

const usersController = new UsersController(
  registerUserUseCase,
  logInUserUseCase,
  getUserPokemonsUseCase
);

export { usersController };
