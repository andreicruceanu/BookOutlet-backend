import express from "express";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { userValidation } from "./middlewares/userValidation.js";
import { userRouter } from "./routes/userRoutes.js";
import { authorsRouter } from "./routes/authorsRoutes.js";
import cors from "cors";
import { reviewRouter } from "./routes/reviewRoutes.js";
import { userProfileRouter } from "./routes/userProfileRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(userValidation);
app.use(cors(corsOptions));
app.use("/api/auth", userRouter);
app.use("/api", authorsRouter);
app.use("/api/product", reviewRouter);
app.use("/api", userProfileRouter);

const mongoURL =
  "mongodb+srv://andrei:CtEblSxxL7buBlTU@cluster0.dcl3cah.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connect to database");
  })
  .catch((e) => console.log(e));

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

const port = 5000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
