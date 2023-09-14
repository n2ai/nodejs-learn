const express = require('express')
const router = express.Router()

//router.Method('/route', handler)

const {getHomepage, getABC,getHoiDanIT, postCreateUser, getCreatePage, getUpdatePage} = require('../controllers/homeController')

router.get('/',getHomepage)
router.get('/abc',getABC)
router.get('/hoidanit',getHoiDanIT)
router.get('/create',getCreatePage)
router.get('/update/:id',getUpdatePage) 

router.post('/create-user', postCreateUser)
module.exports = router