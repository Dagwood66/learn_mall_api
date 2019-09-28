let mysql = require("mysql");

let connection = mysql.createConnection({
    localhost: "localhost",
    user: "root",
    password: "123456",
    database: "mall",
    useConnectionPooling: true
});

function queryToPromise(query, params = []) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = {
    query: queryToPromise
};

