const connection = require("../config/database")

const getAllUsers = async () =>{
    let [results,fields] = await connection.query('select * from Users')
    return results
}

const updateUserById = async (email,name,city,userId) => {
    let [results,fields] = await connection.query(`UPDATE Users SET email = ?, 
    name =?,
    city = ?
    WHERE id = ?`,
    [email,name,city,userId])
}

const getUserById = async (id)=>{
    let [results,fields] = await connection.query('SELECT * FROM Users u WHERE id = ?',[id])
    return results
}

module.exports = {
    getAllUsers, updateUserById, getUserById
}