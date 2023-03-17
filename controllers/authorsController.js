import { AuthorModel } from "../models/AuthorModel.js";

export const getAuthors = async (_req, res) => {
  try {
    const authors = await AuthorModel.find();
    res.send(authors);
  } catch (error) {
    res.json({ message: err });
  }
};
