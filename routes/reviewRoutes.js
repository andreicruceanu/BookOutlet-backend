import express from "express";
import { createReview, getReviews } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/addreview", createReview);
reviewRouter.get("/reviews/:productId", getReviews);

export { reviewRouter };
