const orm = require("../config/orm.js");
// create the code that will call the ORM functions using burger specific input for the ORM
burgers = {
  selectAll: (cb) => {
    orm.selectAll("burgers", (data) => cb(data));
  },
  insertOne: (burgerName, isDevoured, cb) => {
    let data = { burger_name: burgerName, devoured: isDevoured };
    orm.insertOne("burgers", data, (data) => {
      cb(data);
    });
  },
  updateStatus: (burgerId, isDevoured, cb) => {
    orm.updateOne("burgers", burgerId, "devoured", isDevoured, (data) =>
      cb(data)
    );
  },
};

//Export at the end of the burger.js file
module.exports = burgers;
