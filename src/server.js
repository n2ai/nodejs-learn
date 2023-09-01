const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const port = process.env.port || 8888
const hostname = process.env.HOST_NAME
//config import
const configViewEngine = require('./config/viewEngine')

//config template engine
configViewEngine(app)



app.get('/',(req,res)=>{
    res.send('Hello World! with nodemon')
})

app.get('/abc', (req,res)=>{
    res.send('Check ABC')
})

app.get('/hoidanit',(req,res)=>{
    res.render('sample.ejs')
})

app.listen(port,()=>{
    console.log(`Example app listening on ${port}`)
})