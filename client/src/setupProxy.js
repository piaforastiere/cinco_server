const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/paypal-token"],
    createProxyMiddleware({
      target: "http://localhost:8080",
    })
  );
};