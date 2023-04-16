import express from "express";
import {
  confirmEmail,
  login,
  logout,
  resetPassword,
  sendResetPasswordLink,
} from "../controllers/authController.js";
import { userRegister } from "../controllers/authController.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.get("/verifyEmail", confirmEmail);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/forgotPassword", sendResetPasswordLink);
userRouter.post("/forgotPassword/reset/:token", resetPassword);
export { userRouter };
