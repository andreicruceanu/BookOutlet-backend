import { UserModel } from "../models/UserModel.js";
import Joi from "joi";
import { settings } from "../settings.js";
import Jwt from "jsonwebtoken";
import crypto from "crypto";
import createError from "../utils/createError.js";

const getUsers = (_req, res) => {
  res.send({
    message: "All users",
  });
};

const login = async (req, res, next) => {
  const email = req.body.email;
  const password = hashPassword(req.body.password);

  try {
    let user = await UserModel.findOne({ email, password });

    if (!user)
      return next(createError(400, "Adresă de e-mail sau parolă incorecte!"));

    const token = Jwt.sign(
      { id: user._id, email: user.email },
      settings.secretKey,
      { expiresIn: 3600 }
    );
    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .send({
        message: "Login Successful",
        userDetails: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
          terms: user.terms,
          offer: user.offer,
          isActivated: user.isActivated,
          createAt: user.createdAt,
          updateAt: user.updatedAt,
        },
      });
  } catch (err) {
    next(err);
  }
};

const userRegister = async (req, res, next) => {
  const userCredentials = { ...req.body };

  const ValidationResult = validateUserRegister(userCredentials);

  if (ValidationResult.error) {
    return res.status(400).send(ValidationResult.error.details[0].message);
  }

  try {
    userCredentials.password = hashPassword(userCredentials.password);
    let dataUser = new UserModel(userCredentials);
    await dataUser.save();
    res.status(200).send({
      message: "User registered successfully",
    });
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};

//validation User Register
function validateUserRegister(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(8)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%~`^&*}{|?}])[A-Za-z\d@$!#^~`%*?&]{8,}$/
      )
      .required(),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")),
    terms: Joi.boolean().valid(true).required(),
    offer: Joi.boolean(),
  });
  return schema.validate(user);
}

function hashPassword(password) {
  const salt = settings.secretSalt;
  const hash = crypto
    .pbkdf2Sync(password, salt, 100, 32, "sha512")
    .toString("hex");
  return hash;
}

export { getUsers, userRegister, login, logout };
