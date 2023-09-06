const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const port = process.env.port || 8888
const hostname = process.env.HOST_NAME

//import database connection
const connection = require('./config/database')

//config import
const configViewEngine = require('./config/viewEngine')

//define web routes
const webRoutes= require('./routes/web')

//config template engine
configViewEngine(app)


//routes
//first parameter will be the prefix, the rest follow
app.use('/', webRoutes)

//test connection


//query
connection.query(
    'SELECT * FROM Users ',
    function (err,results){
        console.log(">>>results= ",results);
    }
)

app.listen(port,()=>{
    console.log(`Example app listening on ${port}`)
})