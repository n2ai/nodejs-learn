const express = require('express')
const router = express.Router()

//router.Method('/route', handler)

const {getHomepage, getABC,getHoiDanIT} = require('../controllers/homeController')

router.get('/',getHomepage)

router.get('/abc',getABC)

router.get('/hoidanit',getHoiDanIT)

module.exports = router