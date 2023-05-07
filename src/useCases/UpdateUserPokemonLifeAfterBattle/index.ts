import { UpdateUserPokemonLifeAfterBattleUseCase } from "./UpdateUserPokemonLifeAfterBattleUseCase";
import { pokemonsRepository } from "../../repositories/Pokemons";

const updateUserPokemonLifeAfterBattleUseCase =
  new UpdateUserPokemonLifeAfterBattleUseCase(pokemonsRepository);

export { updateUserPokemonLifeAfterBattleUseCase };
