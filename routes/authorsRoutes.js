import express from "express";
import {
  getAllAuthors,
  getAuthor,
  getImportanceAuthors,
} from "../controllers/authorsController.js";

const authorsRouter = express.Router();

authorsRouter.get("/author/all", getAllAuthors);
authorsRouter.get("/author/importance", getImportanceAuthors);
authorsRouter.get("/author/:name", getAuthor);

export { authorsRouter };
