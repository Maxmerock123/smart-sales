const express = require("express");
const axios = require("axios").default;
const dotenv = require("dotenv");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const env = dotenv.config().parsed;

app.listen(4000, () => {
  console.log("listening on 4000");
});

// Nodemailer Application
const nodemailer = require("nodemailer");

function receiveData() {
  app.post("/summaryData", (req, res) => {
    const receivedData = req.body;
    sendEmail(receivedData);

    console.log("receivedData = ", receivedData);
  });
}

async function sendEmail(data) {
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
    text: JSON.stringify(data),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}

// fetchDataAndSendEmail();
receiveData();
