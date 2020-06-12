const express = require("express");
const router = express.Router();
const db = require("../data/config.js");

// router.get("/", (req, res) => {
//   res.json("This is from your rec router!");
// });

router.get("/rec", (req, res) => {
  db("recipes").then((e) => {
    res.json(e);
  });
});

router.get("/ing", (req, res) => {
  db("ingredients").then((e) => {
    res.json(e);
  });
});

router.get("/steps", (req, res) => {
  db("steps").then((e) => res.json(e));
});

router.get("/all", (req, res) => {
  db("recipes")
    .join("steps", "steps.id", "recipes.id")
    .then((e) => res.json(e));
});

module.exports = router;
