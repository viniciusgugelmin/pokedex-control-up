import { PokemonsRepositoryDTO } from "./PokemonsRepositoryDTO";
import { DatabaseDTO } from "../../application/services/database/Database/DatabaseDTO";

class PokemonsRepository implements PokemonsRepositoryDTO.IPokemonsRepository {
  private readonly pokemons = this.database.db.pokemon;

  constructor(private database: DatabaseDTO.IDatabase) {}

  public async save({ id, userId, life }: PokemonsRepositoryDTO.SaveDTO) {
    await this.pokemons.create({ data: { pokemonId: id, userId, life } });
  }
}

export { PokemonsRepository };
