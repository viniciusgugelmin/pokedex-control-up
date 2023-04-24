import { Router } from "express";
import { systemRouter } from "./systemRouter";
import { pokemonsRouter } from "./pokemonsRouter";
import { usersRouter } from "./usersRouter";

const routes = Router();

routes.use("/", systemRouter);
routes.use("/users", usersRouter);
routes.use("/pokemons", pokemonsRouter);

export { routes };
