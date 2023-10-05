const mysql = require("mysql");

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "test1234",
	port: "3306",
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});
