const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// get all notes
router.get("/", (req, res) => {
  burger.selectAll((data) => console.table(data));
});

//update devoured status
router.put("/", (req, res) => {
  burger.updateStatus(req.body.burgerId, req.body.isDevoured, (data) => {
    console.log(data);
  });
});

//create a burger
router.post("/", (req, res) => {
  burger.insertOne(req.body.burgerName, req.body.isDevoured, (data) => {
    console.log(data);
  });
});
module.exports = router;
