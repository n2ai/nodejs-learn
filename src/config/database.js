//import mysql
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    port: 3307,
    user:'root',
    password:'123456',
    database:'hoidanit'
})

module.exports = connection;