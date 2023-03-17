import { settings } from "../settings.js";
import createError from "../utils/createError.js";
import Jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401, "You are not authenticated!"));

  Jwt.verify(token, settings.secretKey, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.userId = payload.id;
    next();
  });
};
