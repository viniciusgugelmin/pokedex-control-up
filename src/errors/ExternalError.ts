class ExternalError {
  public readonly statusCode = 424;

  constructor(
    public readonly message: string,
    public readonly data: {} | [] = {}
  ) {
    this.message = `External Error - ${message}`;
    this.data = data;
  }
}

export { ExternalError };
