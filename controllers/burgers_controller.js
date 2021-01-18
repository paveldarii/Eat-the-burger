const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// get all notes
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    res.render("burgers", { data });
  });
});

//update devoured status
router.put("/api", (req, res) => {
  //console.log(req.body.burgerId);
  burger.updateStatus(req.body.burgerId, true, (data) => {
    burger.selectAll((response) => {
      res.render("burgers", { response });
    });
  });
});

//create a burger
router.post("/api", (req, res) => {
  console.log(req.body);
  burger.insertOne(req.body.burgerName, false, (data) => {
    console.log(data);
    burger.selectAll((data) => {
      res.render("burgers", { data });
    });
  });
});
module.exports = router;
