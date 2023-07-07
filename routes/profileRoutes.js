import express from "express";
import { getUserProfile } from "../controllers/profileController.js";
import { verifyToken } from "../middlewares/jwt.js";

const profileRouter = express.Router();

profileRouter.get("/profile", verifyToken, getUserProfile);

export { profileRouter };
