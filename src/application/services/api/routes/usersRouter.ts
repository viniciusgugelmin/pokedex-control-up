import { Router } from "express";
import { usersController } from "../controllers/Users";
import { isAuthenticatedMiddleware } from "../../../../middlewares/IsAuthenticated";
import { validateSchemaMiddleware } from "../../../../middlewares/ValidateSchema";
import { signinBodySchema, signupBodySchema } from "../../../../schemas/users";

const usersRouter = Router();

usersRouter.post(
  "/signup",
  validateSchemaMiddleware.handle({
    schema: signupBodySchema,
    type: "body",
  }),
  (req, res) => usersController.signup(req, res)
);
usersRouter.post(
  "/signin",
  validateSchemaMiddleware.handle({
    schema: signinBodySchema,
    type: "body",
  }),
  (req, res) => usersController.signin(req, res)
);
usersRouter.get(
  "/",
  (req, res, next) => isAuthenticatedMiddleware.handle(req, res, next),
  (req, res) => usersController.auth(req, res)
);

export { usersRouter };
