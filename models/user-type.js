import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userTypeSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const UserType = mongoose.model("UserType", userTypeSchema);
