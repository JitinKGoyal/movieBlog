const con = require("../../db")



const saveTOdb = async (movies) => {
    try {
        let response = {
            duplicates: {
                number: 0,
                titles: []
            },
            successfullyAdded: {
                number: 0,
                titles: [],
            }
        }

        const promises = movies.map(async movie => {

            movie.title.includes("'") && console.log('movie.title', movie.title, movie.title.includes("'"))

            if (movie.title.includes("'")) {
                movie.title = movie.title.replace("'", "")
            }

            let query = `select * from movie where title='${movie.title || movie.Title}'`;
            await new Promise((resolve, reject) => {
                con.query(query, (err, movies) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }

                    if (movies.length != 0) {
                        response.duplicates.titles.push(movie.title || movie.Title);
                        response.duplicates.number++;
                        resolve()
                    } else {

                        movieInput = {
                            title: movie.title || movie.Title,
                            data: JSON.stringify(movie),
                            date: new Date().toString()
                        }

                        query = `INSERT INTO movie SET ?`

                        con.query(query, movieInput, (err, _) => {
                            if (err) {
                                console.log("error in adding movie: " + movie.title || movie.Title, err)
                                reject(err);
                            }
                            else {
                                response.successfullyAdded.titles.push(movie.title || movie.Title);
                                response.successfullyAdded.number++;
                                resolve()
                            }
                        });
                    }
                });
            })

        })

        await Promise.all(promises)
        return response;

    } catch (error) {
        console.log(error)
    }

}

module.exports = { saveTOdb }