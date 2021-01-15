const accountSid = "xxx";
const authToken = "xxx";
const client = require("twilio")(accountSid, authToken);

function sendMessage(message) {
  client.messages
    .create({
      from: "whatsapp:+14155238886",
      body: message,
      to: "whatsapp:xxx",
    })
    .then((message) => {
      console.log("Sent message: ", message.body);
      console.log(message.sid);
    })
    .catch(() => console.log("Could not send message"))
    .done();
}

console.log("Script running");

setInterval(() => {
  let x = new Date();
  let hours = x.getHours();
  let mins = x.getMinutes();
  let secs = x.getSeconds();
  if (hours == 8 && mins == 30 && secs == 0) {
    sendMessage("Wake up. Good Morning!");
  }
  if (hours == 9 && mins == 0 && secs == 0) {
    sendMessage("Morning Walk");
  }
  if (hours == 10 && mins == 0 && secs == 0) {
    sendMessage("Breakfast Time");
  }
  if (hours == 11 && mins == 0 && secs == 0) {
    sendMessage("Class");
  }
  if (hours == 12 && mins == 30 && secs == 0) {
    sendMessage("Study Time");
  }
  if (hours == 14 && mins == 0 && secs == 0) {
    sendMessage("Lunch Time");
  }
  if (hours == 17 && mins == 0 && secs == 0) {
    sendMessage("Football Time");
  }
  if (hours == 19 && mins == 0 && secs == 0) {
    sendMessage("Study Time");
  }
  if (hours == 23 && mins == 0 && secs == 0) {
    sendMessage("Bed Time. Goodnight!");
  }
}, 1000);
