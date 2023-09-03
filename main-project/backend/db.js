const mysql = require('mysql')

// mysql Connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "movie-blog"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to mysql!");
});

module.exports = con