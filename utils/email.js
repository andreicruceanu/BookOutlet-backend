import nodemailer from "nodemailer";

export const sendEmail = async (listTo, subject, text, html = "") => {
  const host = "in-v3.mailjet.com";
  const port = 587;

  const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `${process.env.MAIL_APP} <${process.env.MAIL_USERNAME}>`,
    to: listTo.join(", "),
    subject: subject,
    text: text,
    html: html,
  });
};
