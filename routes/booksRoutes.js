import { Router } from "express";
import {
  getAllBooks,
  getAttributes,
  getBook,
  getRecommendedBooks,
  getTopBooks,
} from "../controllers/booksController.js";

const booksRoutes = Router();

booksRoutes.get("/book/recommended/:id", getRecommendedBooks);
booksRoutes.get("/book/:id", getBook);
booksRoutes.get("/books", getAllBooks);
booksRoutes.get("/topBooks", getTopBooks);
booksRoutes.get("/:bookId/getattributes", getAttributes);

export { booksRoutes };
