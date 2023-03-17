import { ReviewModel } from "../models/ReviewModel.js";

const createReview = async (req, res) => {
  const newReview = new ReviewModel({
    productId: req.body.productId,
    memberId: req.body.memberId,
    memberName: req.body.memberName,
    rating: req.body.rating,
    text: req.body.text,
    title: req.body.title,
  });

  try {
    const review = await ReviewModel.findOne({
      productId: req.body.productId,
      memberId: req.body.memberId,
    });

    if (review) {
      return res.status(403).send("Ai creat deja un review");
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
