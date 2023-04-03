import { ReviewModel } from "../models/ReviewModel.js";
import { UserModel } from "../models/UserModel.js";

const createReview = async (req, res) => {
  const productId = req.params.productId;

  if (!req.user) {
    return next(createError(401, "User not found", "user_not_fond"));
  }

  const newReview = new ReviewModel({
    productId: productId,
    userId: req.user._id,
    userName: req.user.firstName + " " + req.user.lastName,
    rating: Number(req.body.Rating),
    text: req.body.Text,
    title: req.body.Title,
  });

  try {
    const review = await ReviewModel.findOne({
      productId: productId,
      userId: req.user._id,
    });

    if (review) {
      return next(
        createError(
          403,
          "You have already created a review",
          "review_already_created"
        )
      );
    }
    const saveReview = await newReview.save();

    res.status(201).send(saveReview);
  } catch (error) {
    console.log(error);
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ productId: req.params.productId });
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
  }
};

export { createReview, getReviews };
