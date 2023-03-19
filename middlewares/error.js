import jwt from "jsonwebtoken";
import AlreadyExistsException from "../exceptions/already-exists-exception.js";
import InactiveAccountException from "../exceptions/inactive-account-exception.js";
import InvalidTokenException from "../exceptions/invalid-token-exception.js";
import MissingFieldException from "../exceptions/missing-field-exception.js";
import NoEntityFoundException from "../exceptions/no-entity-found-exception.js";
import UnauthorizedAccessException from "../exceptions/unauthorized-access-exception.js";
import { SEVERITIES } from "../constants/severities.js";

export default (err, req, res, next) => {
  let statusCode = 500;
  let message = err.message;

  console.log(err.message);

  if (err instanceof jwt.JsonWebTokenError) {
    statusCode = 401;
    message = "Token-ul nu este valid!";
  }

  if (err instanceof NoEntityFoundException) {
    statusCode = 404;
  }

  if (err instanceof UnauthorizedAccessException) {
    statusCode = 401;
  }

  if (err instanceof MissingFieldException) {
    statusCode = 422;
  }

  if (err instanceof InvalidTokenException) {
    statusCode = 401;
  }

  if (err instanceof AlreadyExistsException) {
    statusCode = 409;
  }

  if (err instanceof InactiveAccountException) {
    statusCode = 403;
  }

  console.log(`Error message: ${message}`);
  console.log(`Error stack: ${err.stack}`);
  console.log(`Error status code: ${statusCode}`);

  res.status(statusCode);

  res.json({
    message,
    severity: SEVERITIES.ERROR,
  });

  next();
};
