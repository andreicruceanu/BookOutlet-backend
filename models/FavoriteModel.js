import mongoose from "mongoose";

const { Schema } = mongoose;

const FavoriteSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "UserModal",
      require: true,
    },
    bookId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    mainImageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

export const Favorite = mongoose.model("favorite", FavoriteSchema);
