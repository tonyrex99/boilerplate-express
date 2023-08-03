require("dotenv").config();
const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  console.log("Hello Expressed");
  var absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});
app.get("/json", (req, res) => {
  const message =
    process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON" : "Hello json";
  console.log(message);
  res.json({ message: message });
});

module.exports = app;
