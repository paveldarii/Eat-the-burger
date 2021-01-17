const connection = require("./connection.js");
const mysql = require("mysql");
const { response } = require("express");
//Create the methods that will execute the necessary MySQL commands in the controllers.
//These are the methods you will need to use in order to retrieve and store data in your database.
const selectAll = (tableName, cb) =>
  connection.query(`SELECT * FROM ${tableName};`, function (err, data) {
    if (err) {
      return cb(err);
    }
    return cb(data);
  });
const insertOne = (tableName, obj, cb) => {
  connection.query(
    `INSERT INTO ${tableName} SET ?;`,
    obj,
    function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(result);
    }
  );
};
const updateOne = (
  tableName,
  idToUpdate,
  columnToUpdate,
  contentToUpdate,
  cb
) => {
  connection.query(
    `UPDATE ${tableName} SET ? WHERE ?;`,
    [{ [columnToUpdate]: contentToUpdate }, { id: idToUpdate }],
    function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(result);
    }
  );
};

module.exports = {
  selectAll,
  insertOne,
  updateOne,
};
