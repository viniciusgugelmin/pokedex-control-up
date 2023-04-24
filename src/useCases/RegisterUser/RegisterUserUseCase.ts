import { RegisterUserUseCaseDTO } from "./RegisterUserUseCaseDTO";
import { UsersRepositoryDTO } from "../../repositories/Users/UsersRepositoryDTO";
import { AppError } from "../../errors/AppError";
import { CryptProviderDTO } from "../../providers/Crypt/CryptProviderDTO";

class RegisterUserUseCase
  implements RegisterUserUseCaseDTO.IRegisterUserUseCase
{
  constructor(
    private readonly usersRepository: UsersRepositoryDTO.IUsersRepository,
    private readonly cryptProvider: CryptProviderDTO.ICryptProvider
  ) {}

  public async execute({
    name,
    email,
    password,
  }: RegisterUserUseCaseDTO.ExecuteDTO) {
    const userAlreadyExists = await this.usersRepository.findByUsernameOrEmail({
      username: name,
      email,
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const hashedPassword = await this.cryptProvider.crypt(password);

    return this.usersRepository.create({
      username: name,
      email,
      password: hashedPassword,
    });
  }
}

export { RegisterUserUseCase };
