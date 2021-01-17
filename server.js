const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "/public")));

app.use("/burgers", require("./controllers/burgers_controller.js"));

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server listening on port: http://localhost:" + PORT);
});
