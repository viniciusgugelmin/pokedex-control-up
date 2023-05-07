import { UsersController } from "./UsersController";
import { registerUserUseCase } from "../../../../../useCases/RegisterUser";
import { logInUserUseCase } from "../../../../../useCases/LogInUser";
import { getUserPokemonsUseCase } from "../../../../../useCases/GetUserPokemons";
import { getUserPokemonUseCase } from "../../../../../useCases/GetUserPokemon";
import { discardUserPokemonUseCase } from "../../../../../useCases/DiscardUserPokemon";
import { feedUserPokemonUseCase } from "../../../../../useCases/FeedUserPokemon";
import { updateUserPokemonLifeAfterBattleUseCase } from "../../../../../useCases/UpdateUserPokemonLifeAfterBattle";

const usersController = new UsersController(
  registerUserUseCase,
  logInUserUseCase,
  getUserPokemonsUseCase,
  getUserPokemonUseCase,
  discardUserPokemonUseCase,
  feedUserPokemonUseCase,
  updateUserPokemonLifeAfterBattleUseCase
);

export { usersController };
