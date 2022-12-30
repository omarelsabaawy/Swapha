const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", { target: "http://express-generator-dev2.us-west-2.elasticbeanstalk.com/" })
    );

};