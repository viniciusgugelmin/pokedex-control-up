import { UsersControllerDTO } from "./UsersControllerDTO";
import { Request, Response } from "express";
import { responseHandler } from "../../handlers";
import { ExpressCustomTypes } from "../../../../../@types/express";
import { RegisterUserUseCaseDTO } from "../../../../../useCases/RegisterUser/RegisterUserUseCaseDTO";
import { LogInUserUseCaseDTO } from "../../../../../useCases/LogInUser/LogInUserUseCaseDTO";

class UsersController implements UsersControllerDTO.IUsersController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCaseDTO.IRegisterUserUseCase,
    private readonly logInUserUseCase: LogInUserUseCaseDTO.ILogInUserUseCase
  ) {}

  public async signup(req: Request, res: Response) {
    const user = await this.registerUserUseCase.execute(
      req.body as RegisterUserUseCaseDTO.ExecuteDTO
    );

    return res.json(
      responseHandler({
        message: "User registered successfully",
        data: user,
      })
    );
  }

  public async signin(req: Request, res: Response) {
    const user = await this.logInUserUseCase.execute(
      req.body as LogInUserUseCaseDTO.ExecuteDTO
    );

    return res.json(
      responseHandler({
        message: "User logged in successfully",
        data: user,
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
