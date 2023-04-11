import { Router } from "express";
import { systemRouter } from "./systemRouter";
import { pokemonsRouter } from "./pokemonsRouter";

const routes = Router();

routes.use("/", systemRouter);
routes.use("/pokemons", pokemonsRouter);

export { routes };
