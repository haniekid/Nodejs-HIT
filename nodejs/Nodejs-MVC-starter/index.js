const express = require("express");
const path = require("path");
const ejs = require("ejs");
const router = require("./src/routes");
const connect = require("./src/configs/database");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "./src/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");

connect();

app.use("/", router);

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
