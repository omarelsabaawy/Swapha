const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", { target: "http://graduation-project-api4-dev.us-west-2.elasticbeanstalk.com/" })
    );

};