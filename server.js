import express from "express";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { userRouter } from "./routes/userRoutes.js";
import { authorsRouter } from "./routes/authorsRoutes.js";
import cors from "cors";
import { reviewRouter } from "./routes/reviewRoutes.js";
import { profileRouter } from "./routes/profileRoutes.js";
import { slidersRouter } from "./routes/slidersRoutes.js";
import { bannersRouter } from "./routes/bannersRoutes.js";
import { booksRoutes } from "./routes/booksRoutes.js";
import { favoriteRouter } from "./routes/favoriteRouters.js";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const corsOptions = {
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(cors(corsOptions));
app.use("/api/auth", userRouter);
app.use("/api", authorsRouter);
app.use("/api/book", reviewRouter);
app.use("/api", profileRouter);
app.use("/api", slidersRouter);
app.use("/api", bannersRouter);
app.use("/api", booksRoutes);
app.use("/api", favoriteRouter);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connect to database");
  })
  .catch((e) => console.log(e));

app.use((err, _req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  const errorCode = err.errorCode || "error_default";
  const errorDate = new Date();

  return res
    .status(errorStatus)
    .json({ errorStatus, errorMessage, errorCode, errorDate });
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on port: ${process.env.PORT || 5000}`)
);
