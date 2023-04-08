import { Router } from "express";
import { getBook } from "../controllers/booksController.js";

const booksRoutes = Router();

booksRoutes.get("/book/:id", getBook);

export { booksRoutes };
