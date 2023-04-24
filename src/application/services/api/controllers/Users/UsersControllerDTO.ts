import { Request, Response } from "express";
import { ExpressCustomTypes } from "../../../../../@types/express";

namespace UsersControllerDTO {
  export interface IUsersController {
    signup(req: Request, res: Response): Promise<Response>;

    signin(req: Request, res: Response): Promise<Response>;

    auth(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<Response>;

    getPokemons(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<Response>;

    getPokemon(
      req: ExpressCustomTypes.AuthenticatedRequest,
      res: Response
    ): Promise<Response>;
  }
}

export { UsersControllerDTO };
