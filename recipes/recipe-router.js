const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("This is from your rec router!");
});

module.exports = router;
