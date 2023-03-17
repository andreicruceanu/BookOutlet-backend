import express from "express";
import { getUsers, login, logout } from "../controllers/authController.js";
import { userRegister } from "../controllers/authController.js";

const userRouter = express.Router();

userRouter.get("/user", getUsers);
userRouter.post("/register", userRegister);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
export { userRouter };
