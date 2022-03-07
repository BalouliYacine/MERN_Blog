const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const app = express()
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
    .then(console.log('Connected to DB'))
    .catch((e) => { console.log(e) });


app.get('/', (req, res) => {
    res.send('<h1>SERVER UP</h1>')
})

app.listen('3000', () => {
    console.log('SERVER UP => 3000');
})