const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const port = process.env.port || 8888
const hostname = process.env.HOST_NAME

//config template engine
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

//config static files
app.use(express.static(path.join(__dirname,'public')))

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