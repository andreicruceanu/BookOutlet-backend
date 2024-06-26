import { AuthorModel } from "../models/AuthorModel.js";
import createError from "../utils/createError.js";

const getAllAuthors = async (_req, res) => {
  try {
    const authors = await AuthorModel.find(
      {},
      { value: 1, books: 1, imageUrl: 1, url: 1 }
    );
    res.send(authors);
  } catch (error) {
    res.json({ message: err });
  }
};

const getImportanceAuthors = async (req, res) => {
  try {
    const importanceAuthors = await AuthorModel.find({ importance: true });
    res.status(200).send(importanceAuthors);
  } catch (error) {}
};

const getAuthor = async (req, res, next) => {
  const { name } = req.params;
  const url = name;

  const author = await AuthorModel.findOne({ url });

  if (!author) {
    return next(createError(404, "Author not found", "author_not_found"));
  } else {
    return res.status(200).send(author);
  }
};

export { getAllAuthors, getImportanceAuthors, getAuthor };
