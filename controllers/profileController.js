import { Address } from "../models/Address.js";
import { ProfileUser } from "../models/ProfileUser.js";
import { UserModel } from "../models/UserModel.js";
import createError from "../utils/createError.js";
import { validateAddress } from "../utils/validation.js";

const saveAddress = async (req, res, next) => {
  const user = req.user;
  try {
    const addressUser = { ...req.body };
    addressUser.userId = user;

    const ValidationResult = validateAddress(addressUser);

    if (ValidationResult.error) {
      return res.status(400).send(ValidationResult.error.details[0].message);
    }

    const addressSaved = await Address.create(addressUser);
    return res.status(200).json(addressSaved);
  } catch (err) {
    next(err);
  }
};

const updateAddress = async (req, res, next) => {
  const user = req.user;
  const { addressId } = req.body;
  try {
    const addressUser = { ...req.body };
    addressUser.userId = user;

    const ValidationResult = validateAddress(addressUser);

    if (ValidationResult.error) {
      return res.status(400).send(ValidationResult.error.details[0].message);
    }
    if (!addressId) {
      return next(
        createError(404, "addressId is required", "addressId_required")
      );
    }

    const updateAddress = await Address.findByIdAndUpdate(
      { _id: addressId },
      addressUser,
      { new: true }
    );
    return res.status(200).json(updateAddress);
  } catch (err) {
    next(err);
  }
};

const deleteAddress = async (req, res, next) => {
  const user = req.user;
  const { addressId } = req.params;
  try {
    const checkAddress = await Address.findOne({
      _id: addressId,
      userId: user,
    });

    if (!checkAddress) {
      return next(createError(404, "address not found", "address_not_found"));
    }

    await Address.findByIdAndDelete(checkAddress._id);

    return res.status(200).json("The address has been successfully deleted.");
  } catch (err) {
    next(err);
  }
};

const getUserProfile = async (req, res, next) => {
  const user = req.user;

  try {
    const userProfile = await ProfileUser.findOne({ userId: user?._id });

    const addressUser = await Address.find({ userId: user?.id });

    if (!userProfile) {
      return next(createError(404, "Profile not found", "profile_not_found"));
    }
    if (addressUser) {
      userProfile.savedAddresses = addressUser;
    }
    res.status(200).json(userProfile);
  } catch (err) {
    next(err);
  }
};

const updateUserProfile = async (req, res, next) => {
  const userId = req.user._id;
  const { ...userValue } = req.body;

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return next(createError(404, "User not found", "user_not_found"));
    }

    const profileUser = await ProfileUser.findOne({ userId });
    if (!profileUser) {
      return next(createError(404, "Profile not found", "profile_not_found"));
    }

    await UserModel.findByIdAndUpdate({ _id: userId }, userValue);
    await ProfileUser.findOneAndUpdate({ userId }, userValue);

    res.status(200).json({ message: "User profile updated successfully" });
  } catch (error) {
    next(error);
  }
};

export {
  getUserProfile,
  updateUserProfile,
  saveAddress,
  updateAddress,
  deleteAddress,
};
