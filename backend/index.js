const line = require('@line/bot-sdk')
const express = require("express")
const axios = require("axios").default
const dotenv = require('dotenv')


const app = express()

const env = dotenv.config().parsed

const lineConfig = {
  channelAccessToken: env.ACCESS_TOKEN,
  channelSecret: env.SECRET_TOKEN

}

const client = new line.Client(lineConfig);

app.post('/webhook', line.middleware(lineConfig), async (req,res)=> {
  try {
    const events = req.body.events
    //console.log('event=>>>',events)
    return events.length > 0 ? await events.map(item => handleEvent(item)) : res.status(200).send("OK")
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
});

async function handleEvent(event){
  console.log(event)
  return client.replyMessage(event.replyToken,{type:'text',text:'test message krub'})
}

app.listen(4000, () => {
  console.log('listening on 4000')
})