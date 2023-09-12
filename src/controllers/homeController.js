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

const getCreatePage = (req,res)=>{
    res.render('create.ejs')
}

const postCreateUser = async (req,res)=>{
    
    let {email, myname,city} = req.body

    // connection.query(
    //     `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
    //     [email,myname,city],
    //     function(err,results){
    //         console.log(results)

    //         res.send('Created user succeed !')
    //     }
    // )
    
    let [results,fields] = await connection.query(
        `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
        [email,myname,city]
    )

    // connection.query(
    //     'select * from Users u',
    //     function(err,results,fields){
    //         console.log(">>>results=", results)
    //     }
    // )

    // const [results,fields] = await connection.query('select * from Users u',)

    console.log(">>>check results: ", results)

}

module.exports = {getHomepage, getABC,getHoiDanIT, postCreateUser, getCreatePage}