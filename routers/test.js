let express = require("express");
let router = express.Router();

/**
 * 用于测试
 * @route GET /test
 * @param {String} name.query
 * @param {Number} pwd.query
 *
 */
router.get("/", function (request, response) {
    response.json({
        msg: "访问成功"
    });
});

/**
 * 用于测试
 * @route POST /test
 * @param {Object} obj.body
 *
 */
router.post("/", function (request, response) {
    response.json({
        msg: "访问成功"
    });
});

module.exports = router;