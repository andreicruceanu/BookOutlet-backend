import mongoose from "mongoose";

const Schema = mongoose.Schema;

const attributes = new Schema({
  bookId: {
    type: Number,
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  attributes: {
    type: Array,
    required: true,
  },
});

export const Attributes = mongoose.model("attributes", attributes);
