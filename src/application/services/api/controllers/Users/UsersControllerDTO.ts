import { Request, Response } from "express";

namespace UsersControllerDTO {
  export interface IUsersController {
    signup(req: Request, res: Response): Promise<Response>;

    signin(req: Request, res: Response): Promise<Response>;

    auth(req: Request, res: Response): Promise<Response>;
  }
}

export { UsersControllerDTO };
