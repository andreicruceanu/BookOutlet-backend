import { Router } from "express";
import { getAttributes, getBook } from "../controllers/booksController.js";

const booksRoutes = Router();

booksRoutes.get("/book/:id", getBook);
booksRoutes.get("/:bookId/getattributes", getAttributes);

export { booksRoutes };
