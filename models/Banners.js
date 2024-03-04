import mongoose from "mongoose";

const Schema = mongoose.Schema;

const banners = new Schema({
  id: {
    type: Number,
    required: true,
  },
  bannerTypeId: {
    type: Number,
    required: true,
  },
  dateStart: {
    type: String,
    require: true,
  },
  dateStop: {
    type: String,
    required: true,
  },
  desktopImage: {
    type: String,
    required: true,
  },
  mobileImage: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
});
export const Banners = mongoose.model("banners", banners);
