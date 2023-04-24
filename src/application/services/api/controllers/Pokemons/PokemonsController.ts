import { PokemonsControllerDTO } from "./PokemonsControllerDTO";
import { Request, Response } from "express";
import { GetFreePokemonsUseCaseDTO } from "../../../../../useCases/GetFreePokemons/GetFreePokemonsUseCaseDTO";
import { responseHandler } from "../../handlers";
import { ExpressCustomTypes } from "../../../../../@types/express";
import { CatchPokemonUseCaseDTO } from "../../../../../useCases/CatchPokemon/CatchPokemonUseCaseDTO";

class PokemonsController implements PokemonsControllerDTO.IPokemonsController {
  constructor(
    private readonly getFreePokemonsUseCase: GetFreePokemonsUseCaseDTO.IGetFreePokemonsUseCase,
    private readonly catchPokemonUseCase: CatchPokemonUseCaseDTO.ICatchPokemonUseCase
  ) {}

  public async getAll(req: Request, res: Response): Promise<Response> {
    const pokemons = await this.getFreePokemonsUseCase.execute();

    return res.json(
      responseHandler({
        message: "Pokemons fetched successfully",
        data: pokemons,
      })
    );
  }

  public async catchOne(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ) {
    const { id: userId } = req.user;
    const { nameOrId } = req.params;

    await this.catchPokemonUseCase.execute({
      userId,
      nameOrId,
    } as CatchPokemonUseCaseDTO.ExecuteDTO);

    return res.status(201).json(
      responseHandler({
        message: "Pokemon caught successfully",
        statusCode: 201,
      })
    );
  }
}

export { PokemonsController };
