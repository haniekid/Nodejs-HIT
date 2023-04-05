const express = require("express");
const path = require("path");
const ejs = require("ejs");

const routes = require("./src/routes");
// const db = require("./src/config/db/");
// connect to database
// db.connect();

const app = express();
const port = 3000;

// chuyển dữ liệu từ server ra thẻ form
app.use(express.urlencoded()); // form => url
app.use(express.json());

app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

// use static folder
app.use("/static", express.static(path.join(__dirname, "src/public")));

// routes init
app.use(routes);

// start web server, lắng nghe port
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
