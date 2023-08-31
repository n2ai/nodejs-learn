const express = require('express')
const app = express()
const path = require('path')
const port = 8081


console.log(">>> check env: ", process.env)

//config template engine
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('Hello World!')
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