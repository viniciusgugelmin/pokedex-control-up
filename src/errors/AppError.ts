class AppError {
  constructor(
    public readonly message: string,
    public readonly statusCode: number = 400,
    public readonly shouldBreakFlow: boolean = true
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.shouldBreakFlow = shouldBreakFlow;
  }
}

export { AppError };
