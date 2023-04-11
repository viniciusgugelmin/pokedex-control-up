import { Router } from "express";
import { pokemonsController } from "../controllers/Pokemons";

const pokemonsRouter = Router();

pokemonsRouter.get("/", (req, res) => pokemonsController.getAll(req, res));

export { pokemonsRouter };
