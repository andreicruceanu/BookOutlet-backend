import { Banners } from "../models/Banners.js";
import createError from "../utils/createError.js";

const getBanners = async (_req, res, next) => {
  const banners = await Banners.find({});

  if (!banners) {
    return next(createError(500, "Banners not found", "banners_not_fond"));
  }

  return res.send(banners);
};
export { getBanners };
