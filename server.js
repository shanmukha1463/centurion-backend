const express = require("express");
const server = express();
const indexRoute = require("./routes");

const PORT = 4000;

server.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

server.use("/", indexRoute);

server.listen(PORT, () => {
  console.log("listening at http://localhost:4000");
});
