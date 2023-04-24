import { tokenProvider } from "../../providers/Token";
import { usersRepository } from "../../repositories/Users";
import { IsAuthenticatedMiddleware } from "./IsAuthenticatedMiddleware";

const isAuthenticatedMiddleware = new IsAuthenticatedMiddleware(
  usersRepository,
  tokenProvider
);

export { isAuthenticatedMiddleware };
