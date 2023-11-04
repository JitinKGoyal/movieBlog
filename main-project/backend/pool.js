
// const mysql = require('mysql');
// // const creds = {
// //     host: "srv598.hstgr.io",
// //     user: "u232016825_filmyStation",
// //     database: "u232016825_filmyStation",
// //     password: "Xv&29+X4l",
// //     connectionLimit: 10
// // }
// const creds = {
//     host: "localhost",
//     user: "root",
//     database: "movie-blog",
//     connectionLimit: 10
// }

// const pool = mysql.createPool(creds);

// // Always release the connection
// const connect = () => {
//     return new Promise((resolve, reject) => {
//         pool.getConnection((err, connection) => {
//             if (err) {
//                 reject(err);
//             }
//             console.log('connected to db')
//             resolve(connection);
//         })
//     })
// }

// module.exports = { connect };