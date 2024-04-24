import express from "express";
import {
  getUserProfile,
  saveAddress,
  updateAddress,
  updateUserProfile,
} from "../controllers/profileController.js";
import { verifyToken } from "../middlewares/jwt.js";

const profileRouter = express.Router();

profileRouter.get("/profile", verifyToken, getUserProfile);
profileRouter.put("/updateProfile", verifyToken, updateUserProfile);
profileRouter.post("/saveAddress", verifyToken, saveAddress);
profileRouter.put("/updateAddress", verifyToken, updateAddress);

export { profileRouter };
