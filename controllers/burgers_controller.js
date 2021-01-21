const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();
// get all notes
router.get("/", (req, res) => {
  burger.selectAll((err, burgers) => {
    if (err) {
      return res.status(404).end();
    }
    res.render("burgers", { burgers });
  });
});

//update devoured status
router.put("/api", (req, res) => {
  burger.updateStatus(req.body.burgerId, true, (err, data) => {
    if (err) {
      return res.status(404).end();
    }
    res.status(200).end();
    return res.render("burgers");
  });
});

//create a burger
router.post("/api", (req, res) => {
  burger.insertOne(req.body.burgerName, false, (err, data) => {
    if (err) {
      return res.status(404).end();
    }
    return res.render("burgers");
  });
});
module.exports = router;
