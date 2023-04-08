import { UserModel } from "../models/UserModel.js";
import Joi from "joi";
import { settings } from "../settings.js";
import Jwt from "jsonwebtoken";
import crypto from "crypto";
import createError from "../utils/createError.js";
import nodemailer from "nodemailer";

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
        offer: user.offer,
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

    await sendEmailValidation(userCredentials.email, userCredentials.firstName);

    if (user) {
      res.status(201).json({
        _id: user.id,
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

async function sendEmailValidation(email, firstName) {
  const host = "in-v3.mailjet.com";
  const port = 587;
  const username = "098fc05e5308584fe73e2de871857a34";
  const password = "6d28e35b7b58d3c17d8fabe60bbdb3cb";

  const emailHash = Buffer.from(email).toString("base64");

  const content = `<html><head><body><p>Salut , ${firstName}</p>
  <br/><button>a href = 'http://127.0.0.1:5000/api/auth/verifyEmail?data=${emailHash}'</button></body></head></html>`;

  const transport = nodemailer.createTransport({
    host: host,
    port: port,
    secure: false,
    auth: {
      user: username,
      pass: password,
    },
  });

  await transport.sendMail({
    from: "bookoutletoffice@gmail.com",
    to: email,
    subject: "Bine ai venit BookOutlet !",
    html: content,
  });
}

const generateToken = (id, email) => {
  return Jwt.sign({ id, email }, settings.secretKey, { expiresIn: "30d" });
};

export { userRegister, login, logout, confirmEmail };
