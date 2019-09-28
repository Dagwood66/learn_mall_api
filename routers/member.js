let express = require("express");
let memberModel = require("../model/memberModel");
let router = express.Router();

/**
 * 用户列表
 * @group Member
 * @route GET /member
 *
 */
router.get("/", function (request, response) {
    memberModel.getMemberList().then(res => {
        response.json(res);
    });
});

router.get("/:id", function (request, response) {
    response.json({

    });
});

/**
 * 用户列表
 * @group Member
 * @route POST /member
 * @param {Object} main.body
 *
 */
router.post("/", function (request, response) {
    response.json(request.body);
});

module.exports = router;