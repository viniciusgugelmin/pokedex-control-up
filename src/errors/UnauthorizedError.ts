class UnauthorizedError {
  public readonly statusCode = 401;

  constructor(public readonly message: string = "Unauthorized") {}
}

export { UnauthorizedError };
