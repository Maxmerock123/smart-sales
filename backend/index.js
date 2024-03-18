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

function formatDataForEmail(jsonData) {
  let formattedText =
    "สรุปรายการจาก application Smart Catering ของ Impact Catering\n\n";
  formattedText += `ชื่อ-นามสกุล: ${jsonData.name}\n`;
  formattedText += `เบอร์โทร: ${jsonData.number}\n`;
  formattedText += `อีเมลล์: ${jsonData.email}\n`;
  formattedText += `สถานที่: ${jsonData.place}\n`;
  formattedText += `ประเภทงาน: ${jsonData.eventType}\n`;
  formattedText += `เมนู: ${jsonData.eventName}\n`;
  formattedText += `จำนวนผู้เข้าร่วมงาน: ${jsonData.people}\n`;
  formattedText += `วันที่จัดงาน: ${jsonData.date}\n`;
  formattedText += `สถานที่: ${jsonData.address}\n`;
  formattedText += `ราคาโดยประมาณ: ${jsonData.price}\n`;
  return formattedText;
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

  const emailBody = formatDataForEmail(data);
  const mailOptions = {
    from: "impactdevmailer@gmail.com",
    to: "maxmerock@gmail.com",
    subject: "Hello from Nodemailer",
    text: emailBody,
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
