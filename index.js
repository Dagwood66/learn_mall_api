let express = require("express");
let router = require("./routers/index");
let app = express();

router(app);

app.listen(3000, function () {
    console.log(`启动时间:${new Date()}`);
    console.log(`启动地址:http://localhost:${3000}`);
});

