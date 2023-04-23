import { TokenProviderDTO } from "./TokenProviderDTO";
import { sign, verify } from "jsonwebtoken";

class TokenProvider implements TokenProviderDTO.ITokenProvider {
  constructor(private secret: string) {}

  async generate({ id }: TokenProviderDTO.GenerateDTO) {
    return sign({ id }, this.secret, {
      expiresIn: "30d",
    });
  }

  async verify(token: TokenProviderDTO.VerifyDTO) {
    try {
      return verify(token, this.secret) as TokenProviderDTO.ITokenPayload;
    } catch (error) {
      return {
        id: null,
      };
    }
  }
}

export { TokenProvider };
