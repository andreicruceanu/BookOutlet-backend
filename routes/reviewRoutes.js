import express from "express";
import { createReview, getReviews } from "../controllers/reviewController.js";
import { verifyToken } from "../middlewares/jwt.js";

const reviewRouter = express.Router();

reviewRouter.post("/:productId/addreview", verifyToken, createReview);
reviewRouter.get("/reviews/:productId", getReviews);

export { reviewRouter };
