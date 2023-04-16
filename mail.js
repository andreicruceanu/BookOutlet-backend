import { settings } from "./settings.js";

import nodemailer from "nodemailer";

const sendEmail = async (to, subject, content) => {
  const transport = nodemailer.createTransport(settings.smtp);

  await transport.sendMail({
    from: settings.emailFrom,
    to: to,
    subject: subject,
    html: content,
  });
};

export { sendEmail };
