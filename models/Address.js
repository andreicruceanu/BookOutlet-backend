import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AddressSchema = new Schema(
  {
    userId: {
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
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      require: true,
      default: "Romania",
    },
    county: {
      type: Number,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Address = mongoose.model("address", AddressSchema);
