let dbUtils = require("../utils/dbUtils");
// function MemBerModel() {
//     this.id = null;
//     this.member_level_id = null;
//     this.username = null;
//     this.password = null;
//     this.nickname = null;
//     this.phone = null;
//     this.status = null;
//     this.create_time = null;
//     this.icon = null;
//     this.gender = null;
//     this.birthday = null;
//     this.city = null;
//     this.job = null;
//     this.personalized_signature = null;
//     this.source_type = null;
//     this.integration = null;
//     this.growth = null;
//     this.luckey_count = null;
//     this.history_integration = null;
// }

function getMemberList() {
    return dbUtils.query("select * from ums_member");
}

function addMember() {

}

function resetPwd() {

}

module.exports = {
    getMemberList,
    addMember,
    resetPwd,
};