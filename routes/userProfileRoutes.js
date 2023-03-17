import express from "express";
import { getUserProfile } from "../controllers/userProfileController.js";
import { verifyToken } from "../middlewares/jwt.js";

const userProfileRouter = express.Router();

userProfileRouter.get("/profile", verifyToken, getUserProfile);

export { userProfileRouter };
