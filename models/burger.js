const orm = require("../config/orm.js");
// created the code that calls the ORM functions using burger specific input for the ORM
burgers = {
  selectAll: (cb) => {
    orm.selectAll("burgers", (data) => cb(data));
  },
  insertOne: (burgerName, isDevoured, cb) => {
    let data = { burger_name: burgerName, devoured: isDevoured };
    orm.insertOne("burgers", data, (response) => {
      cb(response);
    });
  },
  updateStatus: (burgerId, isDevoured, cb) => {
    orm.updateOne("burgers", burgerId, "devoured", isDevoured, (data) =>
      cb(data)
    );
  },
};

module.exports = burgers;
