const orm = require("../config/orm.js");
// created the code that calls the ORM functions using burger specific input for the ORM
burgers = {
  selectAll: (cb) => {
    orm.selectAll("burgers", (err, data) => cb(err, data));
  },
  insertOne: (burgerName, isDevoured, cb) => {
    let data = { burger_name: burgerName, devoured: isDevoured };
    orm.insertOne("burgers", data, (err, response) => {
      cb(err, response);
    });
  },
  updateStatus: (burgerId, isDevoured, cb) => {
    orm.updateOne("burgers", burgerId, "devoured", isDevoured, (err, data) =>
      cb(err, data)
    );
  },
};

module.exports = burgers;
