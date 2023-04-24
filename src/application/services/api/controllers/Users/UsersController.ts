import { UsersControllerDTO } from "./UsersControllerDTO";
import { Request, Response } from "express";
import { responseHandler } from "../../handlers";
import { ExpressCustomTypes } from "../../../../../@types/express";
import { RegisterUserUseCaseDTO } from "../../../../../useCases/RegisterUser/RegisterUserUseCaseDTO";
import { LogInUserUseCaseDTO } from "../../../../../useCases/LogInUser/LogInUserUseCaseDTO";
import { GetUserPokemonsUseCaseDTO } from "../../../../../useCases/GetUserPokemons/GetUserPokemonsUseCaseDTO";
import { GetUserPokemonUseCaseDTO } from "../../../../../useCases/GetUserPokemon/GetUserPokemonUseCaseDTO";

class UsersController implements UsersControllerDTO.IUsersController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCaseDTO.IRegisterUserUseCase,
    private readonly logInUserUseCase: LogInUserUseCaseDTO.ILogInUserUseCase,
    private readonly getUserPokemonsUseCase: GetUserPokemonsUseCaseDTO.IGetUserPokemonsUseCase,
    private readonly getUserPokemonUseCase: GetUserPokemonUseCaseDTO.IGetUserPokemonUseCase
  ) {}

  public async signup(req: Request, res: Response) {
    const user = await this.registerUserUseCase.execute(
      req.body as RegisterUserUseCaseDTO.ExecuteDTO
    );

    return res.status(201).json(
      responseHandler({
        message: "User registered successfully",
        data: user,
        statusCode: 201,
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

  public async getPokemons(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ) {
    const pokemons = await this.getUserPokemonsUseCase.execute({
      userId: req.user.id,
    });

    return res.json(
      responseHandler({
        message: "User pokemons fetched successfully",
        data: pokemons,
      })
    );
  }

  public async getPokemon(
    req: ExpressCustomTypes.AuthenticatedRequest,
    res: Response
  ) {
    const { id } = req.params;

    const pokemon = await this.getUserPokemonUseCase.execute({
      userId: req.user.id,
      pokemonId: +id,
    } as GetUserPokemonUseCaseDTO.ExecuteDTO);

    return res.json(
      responseHandler({
        message: "User pokemon fetched successfully",
        data: pokemon,
      })
    );
  }
}

export { UsersController };
