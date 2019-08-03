const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

const movieRouter = require('./movie/router.js')
app.use(movieRouter)

const port = 5000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

