const connection = require('../config/database')

const getHomepage = (req,res)=>{
    
    return res.render('home.ejs')
}

const getABC = (req,res)=>{
    res.send('check ABC')
}

const getHoiDanIT = (req,res)=>{
    res.render('sample.ejs')
}

const postCreateUser = (req,res)=>{
    
    let {email, myname,city} = req.body

    connection.query(
        `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
        [email,myname,city],
        function(err,results){
            console.log(results)

            res.send('Created user succeed !')
        }
    )
}

module.exports = {getHomepage, getABC,getHoiDanIT, postCreateUser}