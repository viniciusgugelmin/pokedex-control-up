import express from "express";
import cors from "cors";
import "express-async-errors";
import { environment } from "../../../config/environment";
import { errorHandler } from "../handlers";
import { routes } from "../routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../../../config/docs/swagger.json";

const { API_PORT, DOMAIN } = environment;

export class Server {
  private readonly app: express.Application = express();
  private readonly port = +API_PORT;
  private readonly domain = DOMAIN;

  constructor() {
    this.useConfig();
    this.useRoutes();
    this.useHandlers();
  }

  private useConfig(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private useRoutes(): void {
    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    this.app.use("/", routes);
  }

  private useHandlers(): void {
    this.app.use(errorHandler);
  }

  public init() {
    this.app.listen(this.port, async () => {
      console.log(`API is running on: ${this.domain}`);
    });
  }
}
