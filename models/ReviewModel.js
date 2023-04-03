import mongoose from "mongoose";

const { Schema } = mongoose;

const ReviewSchema = new Schema(
  {
    productId: {
      type: Number,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
      enum: [1, 2, 3, 4, 5],
    },
    userId: {
      type: Object,
      require: true,
    },
    userName: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ReviewModel = mongoose.model("review", ReviewSchema);
