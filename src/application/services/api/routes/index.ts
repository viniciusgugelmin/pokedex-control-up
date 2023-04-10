import { Router } from "express";
import { systemRouter } from "./systemRouter";

const routes = Router();

routes.use("/", systemRouter);

export { routes };
