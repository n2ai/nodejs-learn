const express = require('express')
const router = express.Router()

//router.Method('/route', handler)

const {getHomepage, getABC,getHoiDanIT, postCreateUser, getCreatePage,postDeleteUser,getUpdatePage, postUpdateUser, postHandleRemoveUser} = require('../controllers/homeController')

router.get('/',getHomepage)
router.get('/abc',getABC)
router.get('/hoidanit',getHoiDanIT)
router.get('/create',getCreatePage)
router.get('/update/:id',getUpdatePage) 

router.post('/create-user', postCreateUser)

router.post('/update-user',postUpdateUser)

router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)

module.exports = router