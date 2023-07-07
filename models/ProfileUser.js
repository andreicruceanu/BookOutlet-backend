import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    profileId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
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
    newsletter: {
      type: Boolean,
      require: true,
    },
    title: {
      type: String,
    },
    username: {
      type: String,
      require: true,
    },
    savedAddresses: {
      type: Array,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ProfileUser = mongoose.model("profile", ProfileSchema);
