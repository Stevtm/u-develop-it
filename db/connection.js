const mysql = require("mysql2");
require("dotenv").config();

// connect to database
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: process.env.MYSQL_PASS,
	database: "election",
});

module.exports = db;
