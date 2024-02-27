const express = require("express");
const axios = require("axios").default;
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

const env = dotenv.config().parsed;

app.listen(4000, () => {
  console.log("listening on 4000");
});

const nodemailer = require("nodemailer");

async function sendMail() {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "impactdevmailer@gmail.com",
      pass: "ltqv pspy jexp ttqy",
    },
  });

  const mailOptions = {
    from: "impactdevmailer@gmail.com",
    to: "maxmerock@gmail.com",
    subject: "Hello from Nodemailer",
    text: "This is a test email sent using Nodemailer.",
    html:"<h1>ใบสรุปรายการ</h1>"
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}

sendMail();
