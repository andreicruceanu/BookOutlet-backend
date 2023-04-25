import { Favorite } from "../models/FavoriteModel.js";

const addFavorite = async (req, res, next) => {
  try {
    const isFavorite = await Favorite.findOne({
      user: req.user._id,
      bookId: req.body.bookId,
    });

    if (isFavorite) {
      return res.status(200).json(isFavorite);
    }

    const favorite = new Favorite({
      ...req.body,
      user: req.user._id,
    });

    await favorite.save();

    res.status(201).json(favorite);
  } catch (err) {
    next(err);
  }
};

const getFavoriteOfUser = async (req, res, next) => {
  try {
    const favorite = await Favorite.find({ user: req.user._id });
    res.status(200).json(favorite);
  } catch (err) {
    next(err);
  }
};

const removeFavorite = async (req, res, next) => {
  try {
    const { favoriteId } = req.params;

    const favorite = await Favorite.findOne({
      user: req.user._id,
      _id: favoriteId,
    });
    if (!favorite)
      return next(createError(404, "Favorite not found", "favorite_not_found"));

    await favorite.remove();

    res.status(200).send("A fost sters cu succes");
  } catch (err) {
    next(err);
  }
};

export { addFavorite, getFavoriteOfUser, removeFavorite };
