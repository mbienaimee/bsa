import CustomError from "./CustomError.js";

export class NotFoundErr extends CustomError {
  constructor(message) {
    super(message);

    this.statusCode = 404;
  }
}