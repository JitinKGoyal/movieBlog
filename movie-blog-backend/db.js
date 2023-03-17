const mysql = require('mysql')

// mysql Connection
var con = mysql.createConnection({
    host: "localhost",
    user: "u613853800_movie",
    database: "u613853800_movie",
    password: "mZ~UkfRw0"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to mysql!");
});


module.exports = con