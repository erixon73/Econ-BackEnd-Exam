const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const {movieRouter, catRouter, movcatRouter} = require('./2.Routers/index')

const port = 7878

app.use(bodyParser.json())
app.use(cors())

app.get(`/`, (req, res) => {
    res.send(`<h1> API MOVIE_PURWADHIKA </h1>`)
})

app.use('/movies', movieRouter)
app.use('/categories', catRouter)
app.use('/movcat', movcatRouter)

app.listen(port, console.log(`Listen port ${port}`))