const express = require("express");
const config = require("config");
const helmet = require("helmet");
const morgan = require("morgan");
const debug = require("debug")("app:startup");
const app = express();
const { products, home } = require("./routes");
const { logger, auth } = require("./middleware");

//used to get the node environment, it returns development if
// NODE_ENV is not set
//console.log("env", app.get("env"));
//console.log("env", process.env.NODE_ENV);
require("./startup/db")();

debug("Application name", config.get("password"));

app.use(helmet());
app.set("view engine", "pug");
app.set("views", "./views");

if (app.get("env") === "development") {
  app.use(morgan("tiny"));

  debug("Morgan is enabled for logging HTTP request");
}

//express middleware
app.use(express.json());
//to handle form
app.use(express.urlencoded({ extended: true }));
//This is used to serve static files
app.use(express.static("public"));
//custom middlware
app.use(logger);
app.use(auth);

app.use("/", home);
app.use("/api/products", products);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listen on port ${port}`));
module.exports = server;
