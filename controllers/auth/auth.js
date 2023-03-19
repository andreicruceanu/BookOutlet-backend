import Joi from "joi";
import Jwt from "jsonwebtoken";
import crypto from "crypto";
import createError from "../utils/createError.js";
import nodemailer from "nodemailer";
import User from "../../models/user.js";
import PendingUser from "../../models/pending-user.js";
import { settings } from "../settings.js";

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
      return next(
        createError(
          400,
          "Adresă de e-mail sau parolă incorecte!",
          "invalid_email_password"
        )
      );

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

export const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, offer } = req.body;

  if (!firstName)
    throw new MissingFieldException(
      "Campul firstName lipseste din corpul cererii!"
    );

  if (!lastName)
    throw new MissingFieldException(
      "Campul lastName lipseste din corpul cererii!"
    );

  if (!email)
    throw new MissingFieldException(
      "Campul email lipseste din corpul cererii!"
    );

  if (!password)
    throw new MissingFieldException(
      "Campul password lipseste din corpul cererii!"
    );

  if (!offer)
    throw new MissingFieldException(
      "Campul offer lipseste din corpul cererii!"
    );

  const user = await User.findOne({ email });

  if (user)
    throw new AlreadyExistsException(
      "Email-ul este deja folosit de alt utilizator!"
    );

  const pendingUser = await PendingUser.findOne({ email });

  if (pendingUser)
    throw new InactiveAccountException("Email-ul nu este activat!");

  const token = generateActivateToken(email);

  // sendEmail(
  //     [email],
  //     `[${process.env.MAIL_APP}] Activare cont student`,
  //     `Pentru a putea activa contul de student poti folosi link-ul urmator http://127.0.0.1:3000/activate/${token}`
  // )

  console.log(`https://127.0.0.1:3000/activate/${token}`);

  const hashedPassword = await generatePasswordHash(password);

  let userTypeStudent = await UserType.findOne({ type: "student" });

  if (!userTypeStudent) {
    const newUserType = new UserType({ type: "student" });
    userTypeStudent = await newUserType.save();
  }

  const newPendingUser = new PendingUser({
    firstName,
    lastName,
    email,
    token,
    offer,
    password: hashedPassword,
    userTypeId: userTypeStudent._id,
  });

  await newPendingUser.save();

  res.json({
    message: "Te-ai inregistrat cu succes, intra pe email sa activezi contul!",
    severity: "info",
  });
});

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

export { getUsers, userRegister, login, logout, confirmEmail };
