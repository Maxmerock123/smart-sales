const express = require("express");
const axios = require("axios").default;
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

const env = dotenv.config().parsed;

app.listen(4000, () => {
  console.log("listening on 4000");
});

// Nodemailer Application
const nodemailer = require("nodemailer");

async function fetchDataAndSendEmail() {
  try {
    const response = await axios.get("http://localhost:3000/summaryData");

    console.log(JSON.stringify(response.data));

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "impactdevmailer@gmail.com",
        pass: "vebi sgzk espa pfyn",
      },
    });

    const mailOptions = {
      from: "impactdevmailer@gmail.com",
      to: "maxmerock@gmail.com",
      subject: "Hello from Nodemailer",
      text: JSON.stringify(response.data),
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

fetchDataAndSendEmail();
