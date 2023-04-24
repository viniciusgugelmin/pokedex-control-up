import { Router } from "express";
import { usersController } from "../controllers/Users";

const usersRouter = Router();

usersRouter.post("/signup", (req, res) => usersController.signup(req, res));
usersRouter.post("/signin", (req, res) => usersController.signin(req, res));
usersRouter.get("/", (req, res) => usersController.auth(req, res));

export { usersRouter };
