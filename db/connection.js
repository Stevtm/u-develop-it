const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "U#wwGWpy5x!L6Y",
	database: "election",
});

module.exports = db;
