// api endpoint 
const express = require('express')
const cors = require('cors')
// const con = require('./db')
const dotenv = require('dotenv')

dotenv.config()

// con.query("select * from movie where title='title'", (err, result) => {

//     console.log(result);
// })

const app = express()
const port = 3004

app.use(cors())
app.use(express.json({ limit: '10mb' }));

app.use('/api/auth', require('./routes/auth'))
app.use('/api/movie', require('./routes/movie'))
app.use('/api/movie/images', require('./routes/movieImage'))

app.listen(port, () => {
    console.log(`cloud-notebook app listening on port ${port}`)
})


// mongoose, nodemon, express