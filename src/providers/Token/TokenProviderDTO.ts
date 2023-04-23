namespace TokenProviderDTO {
  export interface ITokenProvider {
    generate(payload: GenerateDTO): GenerateTokenResponseDTO;

    verify(token: string): VerifyTokenResponseDTO;
  }

  export type ITokenPayload = {
    id: string;
  };

  export type GenerateDTO = ITokenPayload;

  export type VerifyDTO = string;

  export type GenerateTokenResponseDTO = Promise<string>;

  export type VerifyTokenResponseDTO = Promise<ITokenPayload>;
}

export { TokenProviderDTO };
