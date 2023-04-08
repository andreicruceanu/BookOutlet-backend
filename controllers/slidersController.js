import { Sliders } from "../models/Sliders.js";
import createError from "../utils/createError.js";

const getAllSliders = async (_req, res, next) => {
  const sliders = await Sliders.find({});

  if (!sliders) {
    return next(createError(500, "Sliders not found", "sliders_not_fond"));
  }

  return res.send(sliders);
};
export { getAllSliders };
