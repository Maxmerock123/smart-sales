const line = require("@line/bot-sdk");
const express = require("express");
const axios = require("axios").default;
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

const env = dotenv.config().parsed;

const flexMessageDemo = {
  type: "bubble",
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "text",
        text: "IMPACT Catering",
        weight: "bold",
        size: "xl",
      },
      {
        type: "text",
        text: "สวัสดีค่ะ อิมแพ็ค เคเทอริ่ง บริการจัดเลี้ยงยินดีให้บริการ",
        wrap: true,
      },
      {
        type: "separator",
      },
      {
        type: "text",
        text: "- จัดเลี้ยงงานประชุม",
      },
      {
        type: "text",
        text: "- งานเปิดตัวสินค้า",
      },
    ],
  },
  footer: {
    type: "box",
    layout: "vertical",
    spacing: "sm",
    contents: [
      {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "button",
            action: {
              type: "uri",
              label: "ดูบริการทั้งหมด",
              uri: "http://linecorp.com/",
            },
            color: "#FFFFFF",
          },
        ],
        backgroundColor: "#BE925A",
        cornerRadius: "lg",
      },
    ],
    flex: 0,
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
  return client.replyMessage(event.replyToken, {
    type: "text",
    text: JSON.stringify(flexMessageDemo),
  });
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
