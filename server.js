import express from "express";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorHandler from "./middlewares/error.js";
import { config } from "dotenv";
import { fileURLToPath } from "url";
import { userValidation } from "./middlewares/userValidation.js";
import { userRouter } from "./routes/userRoutes.js";
import { authorsRouter } from "./routes/authorsRoutes.js";
import { reviewRouter } from "./routes/reviewRoutes.js";
import { userProfileRouter } from "./routes/userProfileRoutes.js";

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/static", express.static(path.join(__dirname, "public")));
//app.use(userValidation);

app.use("/api/auth", userRouter);
app.use("/api", authorsRouter);
app.use("/api/product", reviewRouter);
app.use("/api", userProfileRouter);

app.use(errorHandler);

mongoose.set("strictQuery", true);
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB database connection established successfully")
);
app.listen(port, () => console.log(`Server is running on port: ${port}`));
