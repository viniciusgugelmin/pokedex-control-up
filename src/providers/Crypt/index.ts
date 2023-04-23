import { CryptProvider } from "./CryptProvider";
import { environment } from "../../application/config/environment";

const { CRYPT_SALT } = environment;
const cryptProvider = new CryptProvider(CRYPT_SALT);

export { cryptProvider };
