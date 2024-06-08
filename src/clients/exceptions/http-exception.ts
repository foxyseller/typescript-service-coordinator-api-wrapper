export class HttpException extends Error {
  private readonly _code: number;
  private readonly _message: string;
  private readonly _body?: string;

  constructor(code: number, message: string, body: unknown) {
    let stringBody: string | undefined;

    if (typeof body === 'object') {
      stringBody = JSON.stringify(body, undefined, 2);
    } else {
      stringBody = body?.toString();
    }

    super(message, { cause: stringBody });

    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);

    this._code = code;
    this._message = message;
    this._body = stringBody;
  }

  get code(): number {
    return this._code;
  }

  get message(): string {
    return this._message;
  }

  get body(): string | undefined {
    return this._body;
  }
}
