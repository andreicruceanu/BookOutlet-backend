import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/profileController.js";
import { verifyToken } from "../middlewares/jwt.js";

const profileRouter = express.Router();

profileRouter.get("/profile", verifyToken, getUserProfile);
profileRouter.put("/updateProfile", verifyToken, updateUserProfile);

export { profileRouter };
