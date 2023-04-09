import { Attributes } from "../models/Attributes.js";
import { Book } from "../models/Book.js";
import createError from "../utils/createError.js";

const getBook = async (req, res, next) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return next(createError(404, "Book not found", "book_not_found"));
    }

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const getAttributes = async (req, res, next) => {
  const bookId = req.params.bookId;

  try {
    const attributes = await Attributes.findOne({
      bookId,
    });

    console.log({ bookId });

    if (!attributes) {
      return next(
        createError(404, "Attributes not found", "attributes_not_found")
      );
    }

    res.status(200).json(attributes);
  } catch (error) {
    next(error);
  }
};

export { getBook, getAttributes };
