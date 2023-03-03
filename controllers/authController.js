import { UserModel } from "../models/UserModel.js";
import Joi from "joi";
import { settings } from "../settings.js";
import Jwt from "jsonwebtoken";
import crypto from "crypto";

const getUsers = (_req, res) => {
  res.send({
    message: "All users",
  });
};

const login = async (req, res) => {
  const email = req.body.email;
  const password = hashPassword(req.body.password);

  try {
    let data = await UserModel.find({ email, password });

    if (data.length == 0) {
      res.status(400).send({
        message: "Username or password maybe wrong",
      });
    } else {
      const token = Jwt.sign(req.body, settings.secretKey, { expiresIn: 3600 });
      res.status(200).send({
        message: "Login Successful",
        userDetails: {
          id: data[0]._id,
          firstName: data[0].firstName,
          lastName: data[0].lastName,
          email: data[0].email,
          password: data[0].password,
          terms: data[0].terms,
          offer: data[0].offer,
          isActivated: data[0].isActivated,
          createAt: data[0].createdAt,
          updateAt: data[0].updatedAt,
        },
        token: token,
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
};

const userRegister = async (req, res) => {
  const userCredentials = { ...req.body };

  const ValidationResult = validateUserRegister(userCredentials);

  if (ValidationResult.error) {
    return res.status(400).send(ValidationResult.error.details[0].message);
  }

  try {
    userCredentials.password = hashPassword(userCredentials.password);
    let dataUser = new UserModel(userCredentials);
    dataUser.save();
    res.status(200).send({
      message: "User registered successfully",
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
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

export { getUsers, userRegister, login };
