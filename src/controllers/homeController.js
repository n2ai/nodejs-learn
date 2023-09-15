const connection = require('../config/database')
const {getAllUsers} = require('../services/CRUDService')

const getHomepage = async (req,res)=>{
    let results = await getAllUsers()
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

const getUpdatePage = async (req,res)=>{
    const userId = req.params.id
    
    let [results,fields] = await connection.query('SELECT * FROM Users u WHERE id = ?',[userId])
    
    let user = results && results.length > 0 ? results[0] : {}

    console.log(">>>check results: ", results)

    res.render('edit.ejs', {userEdit:user})
}

const postCreateUser = async (req,res)=>{
    
    let {email, myname,city} = req.body
    
    let [results,fields] = await connection.query(
        `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
        [email,myname,city]
    )
    console.log(">>>check results: ", results)

}

const postUpdateUser = (req,res)=>{

    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city
    let userId = req.body.userId

    console.log(">>>email = ", email, "name = ", name, "city = ", city, "userId: ", userId)

    res.send('Updated user succeed!')
}

module.exports = {getHomepage, getABC,getHoiDanIT, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser}