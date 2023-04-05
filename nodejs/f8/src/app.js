const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const port = 3000;
const routes = require("./routers/index");
const db = require("./config/db");
const methodOverride = require("method-override");
const SortMiddleware = require("./app/middlewares/SortMiddleware");
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

app.use(methodOverride("_method"));
app.use(SortMiddleware);
// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : "default";
        const icons = {
          default: "oi oi-elevator",
          asc: "oi oi-sort-ascending",
          desc: "oi oi-sort-descending",
        };
        const types = {
          default: "desc",
          asc: "desc",
          desc: "asc",
        };
        const icon = icons[sortType];
        const type = types[sortType];
        return `
                    <a href="?_sort&column=${field}&type=${type}">
                        <span class="${icon}"></span>
                    </a>
                    `;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
routes(app);

// Connect database
db.connect();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
