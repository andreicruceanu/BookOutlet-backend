import express from "express";
import { createReview, getReviews } from "../controllers/reviewController.js";
import { verifyToken } from "../middlewares/jwt.js";

const reviewRouter = express.Router();

reviewRouter.post("/:bookId/addreview", verifyToken, createReview);
reviewRouter.get("/:bookId/reviews", getReviews);

export { reviewRouter };
