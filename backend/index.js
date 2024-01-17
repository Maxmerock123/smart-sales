const line = require("@line/bot-sdk");
const express = require("express");
const axios = require("axios").default;
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

const env = dotenv.config().parsed;

const flexMessageDemo = {
  type: "flex",
  altText: "Flex Message",
  contents: {
    type: "bubble",
    header: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "image",
          url: "https://i.ibb.co/nCrqVy2/impact-logo.png",
        },
      ],
      margin: "none",
      spacing: "none",
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "สวัสดีค่ะ อิมแพ็ค เคเทอริ่ง บริการจัดเลี้ยงยินดีให้บริการค่ะ",
          wrap: true,
        },
        {
          type: "box",
          layout: "vertical",
          contents: [],
          backgroundColor: "#BD9B60",
          height: "10px",
          cornerRadius: "15px",
          margin: "md",
        },
        {
          type: "text",
          text: "บริการของเรา",
          margin: "md",
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "- จัดเลี้ยงงานประชุม",
            },
            {
              type: "text",
              text: "- งานเปิดตัวสินค้า",
            },
            {
              type: "text",
              text: "- งานทำบุญพระ",
            },
            {
              type: "text",
              text: "- งานมงคลสมรส",
            },
            {
              type: "text",
              text: "- งานเลี้ยงสังสรรค์",
            },
            {
              type: "text",
              text: "- อาหารกล่อง อาหารว่าง",
            },
            {
              type: "text",
              text: "- ซุ้มอาหาร เชฟเทเบิ้ล",
            },
            {
              type: "text",
              text: "- เช่าอุปกรณ์จัดเลี้ยง",
            },
            {
              type: "text",
              text: "- บริการเคเทอริ่งสำหรับหน่วยงานภาครัฐ  ",
              wrap: true,
              scaling: false,
            },
            {
              type: "text",
              text: "- ซุ้มอาหาร เชฟเทเบิ้ล",
            },
          ],
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "ดูบริการทั้งหมด",
                  color: "#FFFFFF",
                  action: {
                    type: "message",
                    label: "action",
                    text: "ดูบริการทั้งหมด",
                  },
                },
              ],
              backgroundColor: "#BD9B60",
              cornerRadius: "15px",
              height: "45px",
              justifyContent: "center",
              alignItems: "center",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "โปรโมชั่นทั้งหมด",
                  color: "#FFFFFF",
                  action: {
                    type: "message",
                    label: "action",
                    text: "โปรโมชั่นทั้งหมด",
                  },
                },
              ],
              backgroundColor: "#BD9B60",
              cornerRadius: "15px",
              height: "45px",
              justifyContent: "center",
              alignItems: "center",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "โทรติดต่อด่วน",
                  color: "#FFFFFF",
                  action: {
                    type: "message",
                    label: "action",
                    text: "โทรติดต่อด่วน",
                  },
                },
              ],
              backgroundColor: "#BD9B60",
              cornerRadius: "15px",
              height: "45px",
              justifyContent: "center",
              alignItems: "center",
            },
          ],
          spacing: "md",
          margin: "md",
        },
      ],
    },
  },
};

const lineConfig = {
  channelAccessToken: env.ACCESS_TOKEN,
  channelSecret: env.SECRET_TOKEN,
};

const client = new line.Client(lineConfig);

app.post("/webhook", line.middleware(lineConfig), async (req, res) => {
  try {
    const events = req.body.events;
    //console.log('event=>>>',events)
    return events.length > 0
      ? await events.map((item) => handleEvent(item))
      : res.status(200).send("OK");
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

async function handleEvent(event, text) {
  console.log(event);
  return client.replyMessage(event.replyToken, flexMessageDemo);
}

app.listen(4000, () => {
  console.log("listening on 4000");
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClient = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongoClient.connect();
    // Send a ping to confirm a successful connection
    await mongoClient.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoClient.close();
  }
}

run().catch(console.dir);
