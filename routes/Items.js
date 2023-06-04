const express = require("express");
const getItems = require("../dataSources/items");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const itemsResult = await getItems(req.params.id);
    res.status(200).send(itemsResult);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
