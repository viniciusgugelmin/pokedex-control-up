import { Router } from "express";

const systemRouter = Router();

systemRouter.get("/", async (req, res) => {
  res.send("POKEDEX CONTROL UP");
});

export { systemRouter };
