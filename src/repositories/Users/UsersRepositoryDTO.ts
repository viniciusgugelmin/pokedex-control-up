import { User } from "../../entities";

namespace UsersRepositoryDTO {
  export interface IUsersRepository {
    findById(data: FindByIdDTO): FindByIdResponseDTO;

    findByUsernameOrEmail(
      data: FindByUsernameOrEmailDTO
    ): FindByUsernameOrEmailResponseDTO;

    create(data: CreateDTO): CreateResponseDTO;
  }

  export type FindByIdDTO = {
    id: number;
  };

  export type FindByIdResponseDTO = Promise<User | null>;

  export type FindByUsernameOrEmailDTO = {
    username: string;
    email: string;
  };

  export type FindByUsernameOrEmailResponseDTO = Promise<User | null>;

  export type CreateDTO = {
    username: string;
    email: string;
    password: string;
  };

  export type CreateResponseDTO = Promise<User>;
}

export { UsersRepositoryDTO };
