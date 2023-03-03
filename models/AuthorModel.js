import mongoose from "mongoose";

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  attributeId: {
    type: Number,
    required: true,
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
  imageUrlWebP: {
    type: String,
    required: true,
    trim: true,
  },
  book: {
    type: Number,
    required: true,
    trim: true,
  },
  importance: {
    type: Number,
    required: true,
    trim: true,
  },
});
export const AuthorModel = mongoose.model("author", authorSchema);
