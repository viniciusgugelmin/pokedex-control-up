import { PokemonsRepository } from "./PokemonsRepository";
import { database } from "../../application/services/database/Database";

const pokemonsRepository = new PokemonsRepository(database);

export { pokemonsRepository };
