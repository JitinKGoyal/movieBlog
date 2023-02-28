const mongoose = require('mongoose');

const dbURI = "mongodb://localhost:27017/movie-blog";
// const dbURI = "mongodb+srv://jkgoyal85:cavJguFbvRukGHPN@cluster0.wsoevhm.mongodb.net/movieBlog?retryWrites=true&w=majority";

const connectMongo = () => {
    mongoose.connect(dbURI, () => {
        console.log("connection is establised");
    });
}

// non-blocking I/O model

module.exports = connectMongo;
