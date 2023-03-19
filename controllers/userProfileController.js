import { UserModel } from "../models/user.js";

const getUserProfile = async (req, res, next) => {
  const token = req.cookies.accessToken;

  try {
    if (token) {
      const userProfile = await UserModel.findById(req.userId);
      res.json(userProfile);
    } else {
      res.json(null);
    }
  } catch (err) {
    next(err);
  }
};

export { getUserProfile };
