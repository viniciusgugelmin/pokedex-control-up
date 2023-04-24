import { Request, Response, NextFunction } from "express";
import { responseHandler } from "./responseHandler";
import { AppError } from "../../../../errors/AppError";
import { ExternalError } from "../../../../errors/ExternalError";
import { PokemonNotFoundError } from "../../../../errors/PokemonNotFoundError";
import { UnauthorizedError } from "../../../../errors/UnauthorizedError";

export function errorHandler(
  err: AppError | ExternalError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (
    err instanceof AppError ||
    err instanceof ExternalError ||
    err instanceof PokemonNotFoundError ||
    err instanceof UnauthorizedError
  ) {
    return res.status(err.statusCode).json(responseHandler(err));
  }

  console.log("-----------------------------------------------------");
  console.log(err);
  console.log("-----------------------------------------------------");

  res.status(500).send(
    responseHandler({
      message: "Internal server error",
      statusCode: 500,
    })
  );
}
