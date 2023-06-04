const express = require("express");
const router = express.Router();
const itemsRoute = require("./Items");

router.get("/", (req, res) => {
  res.send("From Index Route");
});

router.use("/items", itemsRoute);

module.exports = router;
