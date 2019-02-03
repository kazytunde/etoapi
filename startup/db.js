const mongoose = require("mongoose");
const config = require("config");

module.exports = () => {
  const db = config.get("db-url");
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => console.log(`Connected to ${db}`))
    .catch(err => console.log(`Unable to connect to MongoDB: ${err.message}`));
};
