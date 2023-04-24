class PokemonNotFoundError {
  public readonly statusCode = 404;

  constructor(public readonly message: string = "Pokemon not found") {}
}

export { PokemonNotFoundError };
