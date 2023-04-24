import { User } from "../../entities";

namespace RegisterUserUseCaseDTO {
  export interface IRegisterUserUseCase {
    execute(data: ExecuteDTO): ExecuteResponseDTO;
  }

  export type ExecuteDTO = {
    name: string;
    email: string;
    password: string;
  };

  export type ExecuteResponseDTO = Promise<User>;
}

export { RegisterUserUseCaseDTO };
