import { UsersController } from "./UsersController";
import { registerUserUseCase } from "../../../../../useCases/RegisterUser";
import { logInUserUseCase } from "../../../../../useCases/LogInUser";

const usersController = new UsersController(
  registerUserUseCase,
  logInUserUseCase
);

export { usersController };
