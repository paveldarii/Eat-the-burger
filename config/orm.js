const connection = require("./connection.js");
const mysql = require("mysql");
const { response } = require("express");
//Create the methods that will execute the necessary MySQL commands in the controllers.
//These are the methods you will need to use in order to retrieve and store data in your database.
const selectAll = (cb) =>
  connection.query("SELECT * FROM burgers;", function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(data);
  });
const insertOne = (burgerName, devoured, cb) => {
  connection.query(
    "INSERT INTO burgers SET ?;",
    {
      burger_name: burgerName,
      devoured: devoured,
    },
    function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(result);
    }
  );
};
const updateStatus = (burgerId, devoured, cb) => {
  connection.query(
    "UPDATE burgers SET ? WHERE ?;",
    [{ devoured: devoured }, { id: burgerId }],
    function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(result);
    }
  );
};

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateStatus: updateStatus,
};
