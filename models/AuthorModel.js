import mongoose from "mongoose";

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  id: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  value: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  books: {
    type: Number,
    required: true,
    trim: true,
  },
  importance: {
    type: Boolean,
    required: true,
    trim: true,
  },
});
export const AuthorModel = mongoose.model("author", authorSchema);
