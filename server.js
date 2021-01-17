const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.static("./public"));
app.use("/burgers", require("./controllers/burgers_controller.js"));

app.listen(PORT, () => {
  console.log("Server listening on port: http://localhost:" + PORT);
});
