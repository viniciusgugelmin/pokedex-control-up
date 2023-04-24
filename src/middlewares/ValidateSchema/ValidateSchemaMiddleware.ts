import { NextFunction, Request, Response } from "express";
import { responseHandler } from "../../application/services/api/handlers";
import { ValidateSchemaMiddlewareDTO } from "./ValidateSchemaMiddlewareDTO";

class ValidateSchemaMiddleware
  implements ValidateSchemaMiddlewareDTO.IValidateSchemaMiddleware
{
  public handle({ schema, type }: ValidateSchemaMiddlewareDTO.HandleDTO) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req[type], {
        abortEarly: false,
      });

      if (!error) {
        next();
        return;
      }

      const errors = error.details.map((err) => {
        return {
          label: err.context?.label,
          message: err.message,
        };
      });
      return res.status(400).json(
        responseHandler({
          message: "Validation failed",
          statusCode: 400,
          data: errors,
        })
      );
    };
  }
}

export { ValidateSchemaMiddleware };
