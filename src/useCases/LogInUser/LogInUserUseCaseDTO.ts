import { User } from "../../entities";

namespace LogInUserUseCaseDTO {
  export interface ILogInUserUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    usernameOrEmail: string;
    password: string;
  };

  export type ExecuteResponseDTO = Promise<{
    user: User;
    token: string;
  }>;
}

export { LogInUserUseCaseDTO };
