import { Book } from "../models/Book.js";
import { ReviewModel } from "../models/ReviewModel.js";

import createError from "../utils/createError.js";

const createReview = async (req, res, next) => {
  const { bookId } = req.params;

  const book = await Book.findById(bookId);

  if (!book) {
    return next(createError(404, "Book not found", "book_not_fond"));
  }

  if (!req.user) {
    return next(createError(404, "User not found", "user_not_fond"));
  }

  const newReview = new ReviewModel({
    bookId: bookId,
    userId: req.user._id,
    userName: req.user.firstName + " " + req.user.lastName,
    rating: Number(req.body.rating),
    text: req.body.text,
    title: req.body.title,
  });

  try {
    const saveReview = await newReview.save();

    switch (newReview.rating) {
      case 5:
        book.rating.star5 += 1;
        break;
      case 4:
        book.rating.star4 += 1;
        break;
      case 3:
        book.rating.star3 += 1;
        break;
      case 2:
        book.rating.star2 += 1;
        break;
      case 1:
        book.rating.star1 += 1;
        break;

      default:
        null;
    }

    book.rating.totalReviews += 1;
    book.rating.rating =
      (5 * book.rating.star5 +
        4 * book.rating.star4 +
        3 * book.rating.star3 +
        2 * book.rating.star2 +
        1 * book.rating.star1) /
      book.rating.totalReviews;

    await Book.updateOne({ _id: bookId }, { rating: book.rating });

    res.status(201).send(saveReview);
  } catch (error) {
    next(
      createError(
        500,
        "Something went wrong. Please try again later",
        "error_default"
      )
    );
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ bookId: req.params.bookId });

    const filterRevires = reviews.sort(
      (first, second) => second.createdAt - first.createdAt
    );

    res.status(200).send(filterRevires);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { createReview, getReviews };
