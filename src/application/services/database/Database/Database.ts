import pkg from "@prisma/client";
import { DatabaseDTO } from "./DatabaseDTO";

export class Database implements DatabaseDTO.IDatabase {
  readonly db: pkg.PrismaClient;

  constructor() {
    const { PrismaClient } = pkg;
    this.db = new PrismaClient();
  }

  async disconnect() {
    await this.db.$disconnect();
  }
}
