import { UsersControllerDTO } from "./UsersControllerDTO";
import { Response } from "express";
import { responseHandler } from "../../handlers";
import { ExpressCustomTypes } from "../../../../../@types/express";

class UsersController implements UsersControllerDTO.IUsersController {
  public async signup(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ) {
    return res.json(
      responseHandler({
        message: "User authenticated successfully",
        data: req.user,
      })
    );
  }

  public async signin(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ) {
    return res.json(
      responseHandler({
        message: "User authenticated successfully",
        data: req.user,
      })
    );
  }

  public async auth(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ) {
    return res.json(
      responseHandler({
        message: "User authenticated successfully",
        data: req.user,
      })
    );
  }
}

export { UsersController };
