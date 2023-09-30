require('dotenv').config()
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();



const { sequelize } = require('./config/database')

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(bodyParser.json())



sequelize.sync({ alter: false }).then(r => {
    console.log('Database connected')
}).catch(e => {
    console.log(e)
})


