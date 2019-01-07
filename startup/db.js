const mongoose = require("mongoose");
const config = require("config");

module.exports = () => {
  mongoose
    .connect(config.get("db-url"))
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.log(`Unable to connect to MongoDB: ${err.message}`));
};
