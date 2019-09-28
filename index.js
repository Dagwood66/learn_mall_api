let express = require("express");
let router = require("./routers/index");
let expressSwaggerGenerator = require("express-swagger-generator");
let bodyParser = require("body-parser");

let app = express();
let expressSwagger = expressSwaggerGenerator(app);
let expressSwaggerOptions = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/api',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname,
    files: ["./routers/**/*.js"]
};

app.use("/v1/api", express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router(app);

expressSwagger(expressSwaggerOptions);

app.listen(3000, function () {
    console.log(`启动时间:${new Date()}`);
    console.log(`启动地址:http://localhost:${3000}`);
});

