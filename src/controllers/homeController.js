const connection = require('../config/database')

const getHomepage = async (req,res)=>{
    
    let [results,fields] = await connection.query('select * from Users')

    console.log(">>> check rows: ", results)

    return res.render('home.ejs', {listUsers: results})
}

const getABC = (req,res)=>{
    res.send('check ABC')
}

const getHoiDanIT = (req,res)=>{
    res.render('sample.ejs')
}

const getCreatePage = (req,res)=>{
    res.render('create.ejs')
}

const postCreateUser = async (req,res)=>{
    
    let {email, myname,city} = req.body
    
    let [results,fields] = await connection.query(
        `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
        [email,myname,city]
    )
    console.log(">>>check results: ", results)

}

module.exports = {getHomepage, getABC,getHoiDanIT, postCreateUser, getCreatePage}