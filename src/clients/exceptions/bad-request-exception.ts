import { HttpException } from './http-exception.js';

export class BadRequestException extends HttpException {
  constructor(message: string, body: unknown) {
    super(400, message, body);
  }
}
