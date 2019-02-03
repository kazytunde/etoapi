const mongoose = require("mongoose");

const connect = url => {
  const connect = mongoose.connect(url);
  return connect;
};

module.exports = connect;
