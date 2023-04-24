class PokemonAlreadyCaughtError {
  public readonly statusCode = 400;

  constructor(public readonly message: string = "Pokemon already caught") {}
}

export { PokemonAlreadyCaughtError };
