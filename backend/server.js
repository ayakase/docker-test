const express = require('express')
const app = express()
const port = 3000
const cors = require("cors");
const connection = require('./connect');

require("dotenv").config();
app.use(
    cors({
        origin: process.env.FE_URL,
    })
);
app.set("trust proxy", true);
app.get('/', (req, res) => {
    console.log("Connected to frontendy")
    res.send('Hello from server')
})

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})