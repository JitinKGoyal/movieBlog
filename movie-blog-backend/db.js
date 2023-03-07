const mysql = require('mysql')

// mysql Connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "movie-blog",
    connectTimeout: 60000, // 60 seconds
    acquireTimeout: 60000, // 60 seconds
    timeout: 60000 // 60 seconds
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to mysql!");
});


module.exports = con