import { Router } from "express";
import { getAllSliders } from "../controllers/slidersController.js";

const slidersRouter = Router();

slidersRouter.get("/sliders/all", getAllSliders);

export { slidersRouter };
