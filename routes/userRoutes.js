import express from "express";
import { getUsers, login } from "../controllers/authController.js";
import { userRegister } from "../controllers/authController.js";

const userRouter = express.Router();

userRouter.get("/user", getUsers);
userRouter.post("/register", userRegister);
userRouter.post("/login", login);

export { userRouter };
