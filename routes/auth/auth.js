import { Router } from "express";
import {
  confirmEmail,
  getUsers,
  login,
  logout,
} from "../controllers/authController.js";
import { userRegister } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/register", userRegister);

export { authRouter };
