const axios = require("axios");

const channelAccessToken =
  "uYtCWncxZQLSdumKRINqIUXCtSekKS5uLRdqAug4hr/7/AIFndSEavPJv8nabQuHQuqmWK20Q26w9AvRmc0fWKQPIW8Jo/BQh1jLmfRHbg8XYLHYOogvLnrQVW5uBICh++SYfGINVqXRiIQXW08bsAdB04t89/1O/w1cDnyilFU="; // Replace with your actual channel access token
const userId = "U520f0b980d55afe3666bd5d92b231a9c"; // Replace with the actual user ID or group ID

const messageData = {
  to: userId,
  messages: [
    {
      type: "flex",
      altText: "This is a Flex Message",
      contents: {
        type: "bubble",
        body: {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "text",
              text: "Hello,",
            },
            {
              type: "text",
              text: "World!",
            },
          ],
        },
      },
    },
  ],
};

axios
  .post("https://api.line.me/v2/bot/message/push", messageData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${channelAccessToken}`,
    },
  })
  .then((response) => {
    console.log("Message sent successfully:", response.data);
  })
  .catch((error) => {
    console.error(
      "Error sending message:",
      error.response ? error.response.data : error.message
    );
  });
