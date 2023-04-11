import { PokemonsControllerDTO } from "./PokemonsControllerDTO";
import { Request, Response } from "express";
import { GetFreePokemonsUseCaseDTO } from "../../../../../useCases/GetFreePokemons/GetFreePokemonsUseCaseDTO";
import { responseHandler } from "../../handlers";

class PokemonsController implements PokemonsControllerDTO.IPokemonsController {
  constructor(
    private readonly getFreePokemonsUseCase: GetFreePokemonsUseCaseDTO.IGetFreePokemonsUseCase
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
}

export { PokemonsController };
