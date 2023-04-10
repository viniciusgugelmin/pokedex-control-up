import { Request, Response, NextFunction } from "express";
import { responseHandler } from "./responseHandler";
import { AppError } from "../../../../errors/AppError";
import { ExternalError } from "../../../../errors/ExternalError";

export function errorHandler(
  err: AppError | ExternalError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError || err instanceof ExternalError) {
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
