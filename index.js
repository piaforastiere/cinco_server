const express = require('express')
const path = require("path")
const bodyParser = require('body-parser')

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'})
})


const PORT = process.env.PORT || 5000
app.listen(PORT)