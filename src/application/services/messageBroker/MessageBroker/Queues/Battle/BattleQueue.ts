import { QueueAbstract } from "../QueueAbstract";
import { QueueDTO } from "../QueueDTO";
import { UpdateUserPokemonLifeAfterBattleUseCaseDTO } from "../../../../../../useCases/UpdateUserPokemonLifeAfterBattle/UpdateUserPokemonLifeAfterBattleUseCaseDTO";
import { Pokemon } from "../../../../../../entities";

class BattleQueue extends QueueAbstract implements QueueDTO.IQueue {
  constructor(
    private readonly updatePokemonLifeAfterBattleUseCase: UpdateUserPokemonLifeAfterBattleUseCaseDTO.IUpdateUserPokemonLifeAfterBattleUseCase
  ) {
    super("battle");
  }

  public async listen(messageBroker, channel) {
    await super.listen(messageBroker, channel, async (message) => {
      for (const pokemon of Object.values(
        this.fromMessage(message)
      ) as Pokemon[]) {
        await this.updatePokemonLifeAfterBattleUseCase.execute({
          userId: pokemon.userId,
          pokemonId: pokemon.pokemonId,
          life: pokemon.life,
        });
      }
    });
  }
}

export { BattleQueue };
