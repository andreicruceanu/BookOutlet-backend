import { Router } from "express";
import {
  addFavorite,
  getFavoriteOfUser,
  removeFavorite,
} from "../controllers/favoriteController.js";
import { verifyToken } from "../middlewares/jwt.js";

const favoriteRouter = Router();

favoriteRouter.post("/user/addFavorite", verifyToken, addFavorite);
favoriteRouter.get("/user/favorite", verifyToken, getFavoriteOfUser);
favoriteRouter.delete(
  "/user/favorite/:favoriteId",
  verifyToken,
  removeFavorite
);

export { favoriteRouter };
