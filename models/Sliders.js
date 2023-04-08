import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sliders = new Schema({
  id: {
    type: Number,
    required: true,
  },
  desktopImage: {
    type: String,
    require: true,
  },
  mobileImage: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  orderNo: {
    type: Number,
    required: true,
  },
  out: {
    type: Boolean,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: Number,
    required: false,
  },
});
export const Sliders = mongoose.model("sliders", sliders);
