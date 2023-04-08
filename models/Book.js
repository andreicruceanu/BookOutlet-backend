import mongoose from "mongoose";

const Schema = mongoose.Schema;

const book = new Schema({
  id: {
    type: Number,
    required: true,
  },
  productTypeId: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  promoDescription: {
    type: String,
    required: true,
  },
  dateAvailable: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  freeShipping: {
    type: Boolean,
    required: true,
  },
  isbn: {
    type: String,
    require: true,
  },
  publisher: {
    type: String,
    require: true,
  },
  isComingSoon: {
    type: Boolean,
    require: false,
  },
  price: {
    type: Object,
    required: true,
  },
  authors: {
    type: Array,
    required: true,
  },
  rating: {
    type: Object,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  badges: {
    type: Array,
    required: true,
  },
});
export const Book = mongoose.model("book", book);
