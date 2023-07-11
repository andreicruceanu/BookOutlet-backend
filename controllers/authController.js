import { UserModel } from "../models/UserModel.js";
import { ProfileUser } from "../models/ProfileUser.js";
import Joi from "joi";
import { settings } from "../settings.js";
import Jwt from "jsonwebtoken";
import crypto from "crypto";
import createError from "../utils/createError.js";
import { sendEmail } from "../mail.js";
import { getEmailWolcome } from "../emailTeamplet.js";
import { resetPasswordEmail } from "../emailTeamplet.js";

const login = async (req, res, next) => {
  const email = req.body.email;
  const password = hashPassword(req.body.password);

  try {
    let user = await UserModel.findOne({ email, password });

    if (!user)
      return next(
        createError(400, "Wrong email or password", "invalid_email_password")
      );

    const token = generateToken(user._id, user.email);
    res.status(200).json({
      message: "Login Successful",
      userDetails: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        terms: user.terms,
        newsletter: user.newsletter,
        isActivated: user.isActivated,
        createAt: user.createdAt,
        updateAt: user.updatedAt,
      },
      token: token,
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

  const email = userCredentials.email;
  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    return next(createError(400, "Email already exists", "email_exists"));
  }

  try {
    userCredentials.password = hashPassword(userCredentials.password);
    const user = await UserModel.create(userCredentials);
    const userProfile = {
      profileId: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      newsletter: user.newsletter,
      email: user.email,
      username: user.email,
      gender: "Dl",
      savedAddresses: [],
    };

    const profile = await ProfileUser.create(userProfile);

    console.log(profile);

    await sendEmailWolcome(userCredentials.email, userCredentials.firstName);

    if (user && profile) {
      res.status(201).json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user._id, user.email),
      });
    } else {
      return next(createError(400, "Invalid user data", "invalid_user"));
    }
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    res
      .clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send("User has been logged out.");
  } catch (err) {
    next(err);
  }
};

const sendResetPasswordLink = async (req, res, next) => {
  const email = req.body.email;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return next(createError(400, "Email not exist", "email_not_exist"));
  }

  let token = generateToken(user._id, user.email);
  try {
    await sendEmail(
      user.email,
      "Recuperare cont",
      resetPasswordEmail(user.firstName, user.email, token)
    );

    res.status(200).send("Email-ul a fost trimis catre adresa mentionata");
  } catch (err) {
    next(err);
  }
};

const resetPassword = async (req, res, next) => {
  const { token } = req.params;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  if (!token || !password || !confirmPassword) {
    return next(createError(400, "Complete the fields", "complete_the_fields"));
  }

  let tokenData;
  try {
    tokenData = Jwt.verify(token, process.env.JWT_KEY);

    const userId = tokenData.id;

    await UserModel.updateOne(
      { _id: userId },
      { $set: { password: hashPassword(password) } }
    );

    res.status(200).send("Parola a fost schimbata cu succes!");
  } catch (err) {
    next(err);
  }
};

const confirmEmail = async (req, res, next) => {
  const hashData = req.query.data;

  if (!hashData)
    return next(createError(403, "Adresa de email nu a putut fi verificata!"));

  const email = Buffer.from(hashData, "base64").toString("ascii");
  try {
    const checkIsNotConfirmed = await UserModel.findOne({
      email,
      isActivated: false,
    });
    const checkIsConfirmed = await UserModel.findOne({
      email,
      isActivated: true,
    });

    if (checkIsConfirmed)
      return res.status(200).send("Adresa de email este deja confirmata !");

    if (!checkIsNotConfirmed) {
      return next(
        createError(403, "Adresa de email nu a putut fi verificata!")
      );
    }

    await UserModel.updateOne({ email }, { $set: { isActivated: true } });

    res.status(200).send("Succes");
  } catch (err) {
    next(err);
  }
};

//validation User Register
function validateUserRegister(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(8)
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)
      .required(),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")),
    terms: Joi.boolean().valid(true).required(),
    newsletter: Joi.boolean(),
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

async function sendEmailWolcome(email, firstName) {
  const content = getEmailWolcome(firstName);
  sendEmail(email, "Bine ai venit pe BookOutlet !", content);
}

const generateToken = (id, email) => {
  return Jwt.sign({ id, email }, process.env.JWT_KEY || "secret", {
    expiresIn: "30d",
  });
};

export {
  userRegister,
  login,
  logout,
  confirmEmail,
  sendResetPasswordLink,
  resetPassword,
};
