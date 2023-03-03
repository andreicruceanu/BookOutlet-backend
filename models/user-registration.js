import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userRegistrationSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const UserRegistration = mongoose.model(
  "UserRegistration",
  userRegistrationSchema
);
