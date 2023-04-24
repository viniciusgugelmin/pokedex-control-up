import { PokemonsRepositoryDTO } from "./PokemonsRepositoryDTO";
import { DatabaseDTO } from "../../application/services/database/Database/DatabaseDTO";

class PokemonsRepository implements PokemonsRepositoryDTO.IPokemonsRepository {
  private readonly pokemons = this.database.db.pokemon;

  constructor(private database: DatabaseDTO.IDatabase) {}

  public async save({ id, userId, life }: PokemonsRepositoryDTO.SaveDTO) {
    await this.pokemons.create({ data: { pokemonId: id, userId, life } });
  }

  public async findByUserIdAndPokemonId({
    userId,
    pokemonId,
  }: PokemonsRepositoryDTO.FindByUserIdAndPokemonIdDTO) {
    return (
      this.pokemons.findFirst({
        where: {
          userId,
          pokemonId,
          deletedAt: null,
        },
      }) || null
    );
  }

  public async findByUserId({ userId }: PokemonsRepositoryDTO.FindByUserIdDTO) {
    return this.pokemons.findMany({
      where: {
        userId,
        deletedAt: null,
      },
    });
  }

  public async deleteUserPokemon({
    userId,
    pokemonId,
  }: PokemonsRepositoryDTO.DeleteUserPokemonDTO) {
    await this.pokemons.update({
      where: {
        userId_pokemonId: {
          userId,
          pokemonId,
        },
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  public async updateUserPokemon({
    userId,
    pokemonId,
    life,
  }: PokemonsRepositoryDTO.UpdateUserPokemonDTO) {
    return this.pokemons.update({
      where: {
        userId_pokemonId: {
          userId,
          pokemonId,
        },
      },
      data: {
        life,
      },
    });
  }
}

export { PokemonsRepository };
