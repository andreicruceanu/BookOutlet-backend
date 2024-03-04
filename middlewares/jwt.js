import { settings } from "../settings.js";
import createError from "../utils/createError.js";
import Jwt from "jsonwebtoken";
import { UserModel } from "../models/UserModel.js";

export const verifyToken = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = Jwt.verify(token, process.env.JWT_KEY);

      req.user = await UserModel.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      return next(createError(401, "Token is not valid!", "token_invalid"));
    }
  }

  if (!token)
    return next(createError(401, "You are not authenticated!", "no_token"));
};
