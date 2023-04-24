import { LogInUserUseCase } from "./LogInUserUseCase";
import { usersRepository } from "../../repositories/Users";
import { cryptProvider } from "../../providers/Crypt";
import { tokenProvider } from "../../providers/Token";

const logInUserUseCase = new LogInUserUseCase(
  usersRepository,
  cryptProvider,
  tokenProvider
);

export { logInUserUseCase };
