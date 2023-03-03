import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { userValidation } from "./middlewares/userValidation.js";
import { userRouter } from "./routes/userRoutes.js";
import { authorsRouter } from "./routes/authorsRoutes.js";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(userValidation);
app.use(cors(corsOptions));
app.use("/api/auth", userRouter);
app.use("/api", authorsRouter);

const mongoURL =
  "mongodb+srv://andrei:CtEblSxxL7buBlTU@cluster0.dcl3cah.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connect to database");
  })
  .catch((e) => console.log(e));

const port = 5000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
