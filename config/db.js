import mongoose from "mongoose";

const mongoURL =
  "mongodb+srv://andrei:CtEblSxxL7buBlTU@cluster0.dcl3cah.mongodb.net/?retryWrites=true&w=majority";
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
