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

const getAllBooks = async (_req, res, next) => {
  try {
    const books = await Book.find(
      {},
      {
        _id: 1,
        title: 1,
        subtitle: 1,
        bookId: 1,
        url: 1,
        price: 1,
        rating: 1,
        images: 1,
        badges: 1,
      }
    );

    const formattedBooks = books.map((item) => ({
      _id: item._id,
      title: item.title,
      subtitle: item.subtitle,
      bookId: item.bookId,
      url: item.url,
      price: item.price.price,
      oldPrice: item.price.oldPrice,
      mainImageUrl: item.images[0].url,
      rating: item.rating.rating,
      badges: item.badges,
    }));

    res.status(200).json(formattedBooks);
  } catch (error) {
    next(error);
  }
};

export { getBook, getAttributes, getAllBooks };
