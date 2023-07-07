import { ProfileUser } from "../models/ProfileUser.js";
import createError from "../utils/createError.js";

const getUserProfile = async (req, res, next) => {
  const user = req.user;
  if (!user) {
    return next(createError(404, "User not found", "user_not_found"));
  }

  try {
    const userProfile = await ProfileUser.findOne({ profileId: user?._id });

    if (!userProfile) {
      return next(createError(404, "Profile not found", "profile_not_found"));
    }

    res.status(200).json(userProfile);
  } catch (err) {
    next(err);
  }
};

export { getUserProfile };
