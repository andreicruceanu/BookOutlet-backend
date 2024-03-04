import { Router } from "express";
import {
  getAllBooks,
  getAttributes,
  getBook,
} from "../controllers/booksController.js";

const booksRoutes = Router();

booksRoutes.get("/book/:id", getBook);
booksRoutes.get("/books", getAllBooks);
booksRoutes.get("/:bookId/getattributes", getAttributes);

export { booksRoutes };
