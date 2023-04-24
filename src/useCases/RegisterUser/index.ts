import { RegisterUserUseCase } from "./RegisterUserUseCase";
import { usersRepository } from "../../repositories/Users";
import { cryptProvider } from "../../providers/Crypt";

const registerUserUseCase = new RegisterUserUseCase(
  usersRepository,
  cryptProvider
);

export { registerUserUseCase };
