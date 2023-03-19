import mongoose from "mongoose";
import { UserModel } from "../models/user.js";

// Am verificat daca email-ul exista in baza de date
export async function userValidation(req, res, next) {
  if (req.path == "/api/auth/register") {
    let data = await UserModel.find({ email: { $eq: req.body.email } });
    if (data.length > 0) {
      res.status(400).send({
        message: "Email already exist! ",
      });
    } else {
      next();
    }
  } else {
    next();
  }
}
