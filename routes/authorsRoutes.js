import express from "express";
import { getAuthors } from "../controllers/authorsController.js";

const authorsRouter = express.Router();

authorsRouter.get("/authors", getAuthors);

export { authorsRouter };
