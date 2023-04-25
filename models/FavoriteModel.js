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
      ref: "Book",
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Favorite = mongoose.model("favorite", FavoriteSchema);
