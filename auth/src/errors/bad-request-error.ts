import { CustomError } from './customer-error';

export class BadReqeustError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadReqeustError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
