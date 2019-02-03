const mongoose = require("mongoose");

test("test remove collections", async () => {
  for (var i in mongoose.connection.collections) {
    console.log(mongoose.connection.collections[i]);
    // mongoose.connection.collections[i].remove(function() {

    // });
  }
});
