const logger = (req, res, next) => {
  req.hello = "Hello world";
  console.log("middleware run");
  next();
};

module.exports = logger;
