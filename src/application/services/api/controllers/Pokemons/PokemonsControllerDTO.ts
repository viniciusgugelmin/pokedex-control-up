import { Request, Response } from "express";
import { ExpressCustomTypes } from "../../../../../@types/express";

namespace PokemonsControllerDTO {
  import AuthenticatedRequest = ExpressCustomTypes.AuthenticatedRequest;

  export interface IPokemonsController {
    getAll(req: Request, res: Response): Promise<Response>;

    catchOne(req: AuthenticatedRequest, res: Response): Promise<Response>;
  }
}

export { PokemonsControllerDTO };
