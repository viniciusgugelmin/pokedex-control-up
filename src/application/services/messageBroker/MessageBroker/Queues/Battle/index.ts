import { BattleQueue } from "./BattleQueue";
import { updateUserPokemonLifeAfterBattleUseCase } from "../../../../../../useCases/UpdateUserPokemonLifeAfterBattle";

const battleQueue = new BattleQueue(updateUserPokemonLifeAfterBattleUseCase);

export { battleQueue };
