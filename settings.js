import dotenv from "dotenv";
dotenv.config();
export const settings = {
  secretKey: "secret",
  secretSalt: "secretSalt",

  smtp: {
    service: process.env.SMTP_SERVICE || "gmail",
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    secure: false,
    auth: {
      user: process.env.SMTP_USER || "bookoutletoffice@gmail.com",
      pass: process.env.SMTP_PASS || "Your Password",
    },
  },
  emailFrom: "bookoutletoffice@gmail.com",
};
