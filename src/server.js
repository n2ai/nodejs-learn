const express = require('express')
const app = express()
const port = 8081

//config template engine
app.set('views','./views')
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/abc', (req,res)=>{
    res.send('Check ABC')
})

app.get('/hoidanit',(req,res)=>{
    res.send('<h1>Hoi dan it voi eric</h1>')
})

app.listen(port,()=>{
    console.log(`Example app listening on ${port}`)
})