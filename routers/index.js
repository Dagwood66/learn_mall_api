function baseUrl(url) {
    return "/api" + url;
}

module.exports = function (app) {
    app.get(baseUrl(""), function (request, response) {
        response.json({
            msg: "访问成功"
        });
    });

    app.use(baseUrl("/test"),require("./test"))
};
