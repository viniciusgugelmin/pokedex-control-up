import { Request, Response } from "express";

namespace PokemonsControllerDTO {
  export interface IPokemonsController {
    getAll(req: Request, res: Response): Promise<Response>;
  }
}

export { PokemonsControllerDTO };
