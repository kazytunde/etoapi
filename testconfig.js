const mongoose = require("mongoose");
const config = require("config");
const cuid = require("cuid");
const url = "mongodb://localhost:27017/etoApi-test";
const connect = require("./test/connect");

global.newId = () => {
  return mongoose.Types.ObjectId();
};

beforeEach(async done => {
  const db = cuid();
  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function() {});
    }
    return done();
  }
  if (mongoose.connection.readyState === 0) {
    try {
      await connect(url + db);
      clearDB();
    } catch (e) {
      throw e;
    }
  } else {
    clearDB();
  }
});
afterEach(done => {
  mongoose.disconnect();
  return done();
});
afterAll(done => {
  return done();
});
