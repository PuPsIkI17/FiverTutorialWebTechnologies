const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const usersRouter = require('./routes/router.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const app = express()
const apiPort = 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', usersRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))