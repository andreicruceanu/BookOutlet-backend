import jwt from "jsonwebtoken";

export const generateActivateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_ACTIVATE_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
