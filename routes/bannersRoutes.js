import { Router } from "express";
import { getBanners } from "../controllers/bannersController.js";

const bannersRouter = Router();

bannersRouter.get("/banners", getBanners);

export { bannersRouter };
