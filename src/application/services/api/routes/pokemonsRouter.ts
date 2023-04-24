import { Router } from "express";
import { pokemonsController } from "../controllers/Pokemons";
import { isAuthenticatedMiddleware } from "../../../../middlewares/IsAuthenticated";

const pokemonsRouter = Router();

pokemonsRouter.get(
  "/",
  (req, res, next) => isAuthenticatedMiddleware.handle(req, res, next),
  (req, res) => pokemonsController.getAll(req, res)
);

pokemonsRouter.post(
  "/:nameOrId",
  (req, res, next) => isAuthenticatedMiddleware.handle(req, res, next),
  (req, res) => pokemonsController.catchOne(req, res)
);

export { pokemonsRouter };
