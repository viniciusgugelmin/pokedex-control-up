import { UsersRepository } from "./UsersRepository";
import { database } from "../../application/services/database/Database";

const usersRepository = new UsersRepository(database);

export { usersRepository };
