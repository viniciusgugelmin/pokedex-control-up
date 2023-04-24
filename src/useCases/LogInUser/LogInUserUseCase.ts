import { LogInUserUseCaseDTO } from "./LogInUserUseCaseDTO";
import { UsersRepositoryDTO } from "../../repositories/Users/UsersRepositoryDTO";
import { UnauthorizedError } from "../../errors/UnauthorizedError";
import { CryptProviderDTO } from "../../providers/Crypt/CryptProviderDTO";
import { TokenProviderDTO } from "../../providers/Token/TokenProviderDTO";

class LogInUserUseCase implements LogInUserUseCaseDTO.ILogInUserUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryDTO.IUsersRepository,
    private readonly cryptProvider: CryptProviderDTO.ICryptProvider,
    private readonly tokenProvider: TokenProviderDTO.ITokenProvider
  ) {}

  public async execute({
    usernameOrEmail,
    password,
  }: LogInUserUseCaseDTO.ExecuteDTO) {
    const user = await this.usersRepository.findByUsernameOrEmail({
      email: usernameOrEmail,
      username: usernameOrEmail,
    });

    if (!user) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const isPasswordValid = await this.cryptProvider.compare({
      data: password,
      encrypted: user.password,
    });

    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const token = await this.tokenProvider.generate({
      id: user.id,
    });

    return {
      user,
      token,
    };
  }
}

export { LogInUserUseCase };
