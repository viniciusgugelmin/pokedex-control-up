import { environment } from "../../application/config/environment";
import { TokenProvider } from "./TokenProvider";

const { JWT_SECRET } = environment;
const tokenProvider = new TokenProvider(JWT_SECRET);

export { tokenProvider };
