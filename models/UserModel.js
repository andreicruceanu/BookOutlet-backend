import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxLength: 40,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      maxLength: 100,
    },
    password: {
      type: String,
      required: true,
    },
    terms: {
      type: Boolean,
      require: true,
    },
    offer: {
      type: Boolean,
      require: true,
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const UserModel = mongoose.model("user", userSchema);
