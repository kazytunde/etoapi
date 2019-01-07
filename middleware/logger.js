//app.use() is used to install a middleware function in the req processing pipeline
//the middleware will call the next middleware in the pipeline
const log = (req, res, next) => {
  console.log("logging");
  next();
};

module.exports = log;
