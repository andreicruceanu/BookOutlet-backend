import mongoose from "mongoose";

const mongoURL = process.env.MONGODB_URL;
mongoose.set("strictQuery", true);

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true });
    console.log("Connect to database");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = InitiateMongoServer;
