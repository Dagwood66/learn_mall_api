let express = require("express");
let router = express.Router();

router.get("/", function (request, response) {
    response.json({
        msg: "访问成功"
    });
});

module.exports = router;