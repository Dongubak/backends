var mysql = require("mysql2");

var db_info = {
    host: "203.234.48.124",
    user: "tester",
    password: "1234",
    database: "test",
    port: 43306
};

module.exports = {
    init: function () {
      return mysql.createConnection(db_info);
    },
    connect: function (conn) {
      conn.connect(function (err) {
        if (err) console.error("mysql connection error : " + err);
        else console.log("mysql is connected successfully!");
      });
    },
};