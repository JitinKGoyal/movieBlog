// api endpoint 
const express = require('express')
const connectMongo = require('./db')
const cors = require('cors')


connectMongo();

const app = express()
const port = 3004

app.use(cors())
app.use(express.json());

app.use('/api/auth', require('./routes/auth'))
app.use('/api/movie', require('./routes/movie'))


app.listen(port, () => {
    console.log(`cloud-notebook app listening on port ${port}`)
})


// mongoose, nodemon, express