const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res) => {
  const ipaddress =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software,
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
