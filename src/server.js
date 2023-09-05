const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const port = process.env.port || 8888
const hostname = process.env.HOST_NAME
//import mysql
const mysql = require('mysql2')

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
const connection = mysql.createConnection({
    host:'localhost',
    port: 3307,
    user:'root',
    password:'123456',
    database:'hoidanit'
})

//query
connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function (err,results,fields){
        console.log(results);
        console.log(fields)
    }
)

app.listen(port,()=>{
    console.log(`Example app listening on ${port}`)
})