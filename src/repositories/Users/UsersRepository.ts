import { UsersRepositoryDTO } from "./UsersRepositoryDTO";
import { DatabaseDTO } from "../../application/services/database/Database/DatabaseDTO";

class UsersRepository implements UsersRepositoryDTO.IUsersRepository {
  private readonly users = this.database.db.user;

  constructor(private database: DatabaseDTO.IDatabase) {}

  public async findById({ id }: UsersRepositoryDTO.FindByIdDTO) {
    return (
      this.users.findFirst({
        where: {
          id,
        },
      }) || null
    );
  }

  public async findByUsernameOrEmail({
    username,
    email,
  }: UsersRepositoryDTO.FindByUsernameOrEmailDTO) {
    return (
      this.users.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
          ],
        },
      }) || null
    );
  }

  public async create(data: UsersRepositoryDTO.CreateDTO) {
    return this.users.create({
      data,
    });
  }
}

export { UsersRepository };
