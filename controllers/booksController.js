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

export { getBook };
