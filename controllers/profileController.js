import { ProfileUser } from "../models/ProfileUser.js";
import { UserModel } from "../models/UserModel.js";
import createError from "../utils/createError.js";

const getUserProfile = async (req, res, next) => {
  const user = req.user;

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

const updateUserProfile = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return next(createError(404, "User not found", "user_not_found"));
    }

    const profileUser = await ProfileUser.findOne({ profileId: userId });
    if (!profileUser) {
      return next(createError(404, "Profile not found", "profile_not_found"));
    }

    await UserModel.findByIdAndUpdate(
      { _id: userId },
      { firstName: req.body.firstName }
    );

    res.status(200).json({ message: "User profile updated successfully" });
  } catch (error) {
    next(error);
  }
};

export { getUserProfile, updateUserProfile };
