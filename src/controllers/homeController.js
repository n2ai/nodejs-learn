const connection = require('../config/database')
const {getAllUsers,updateUserById, getUserById, deleteUserById} = require('../services/CRUDService')

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

const postUpdateUser =  async (req,res)=>{

    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city
    let userId = req.body.userId

    await updateUserById(email,name,city,userId)

    console.log(">>>email = ", email, "name = ", name, "city = ", city, "userId: ", userId)


    //if update success, redirect to homepage
    res.redirect('/')
}

const postDeleteUser = async (req,res)=>{
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('delete.ejs',{userEdit:user})
}

const postHandleRemoveUser = async (req,res)=>{
    const id = req.body.userId
    await deleteUserById(id)
    res.send('Ok delete')
}

module.exports = {getHomepage, getABC,getHoiDanIT, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser,postDeleteUser,postHandleRemoveUser}