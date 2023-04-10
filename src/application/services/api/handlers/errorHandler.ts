import { Request, Response, NextFunction } from "express";
import { responseHandler } from "./responseHandler";
import { AppError } from "../../../../errors/AppError";

export function errorHandler(
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
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
