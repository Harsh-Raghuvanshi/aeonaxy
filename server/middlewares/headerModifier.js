function responseHeaderModifier(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Add PUT method
  next();
}

module.exports = {
  responseHeaderModifier: responseHeaderModifier // Export the function directly
};
