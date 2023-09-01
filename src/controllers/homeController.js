const getHomepage = (req,res)=>{
    res.send('Hello World! with nodemon')
}

const getABC = (req,res)=>{
    res.send('check ABC')
}

const getHoiDanIT = (req,res)=>{
    res.render('sample.ejs')
}

module.exports = {getHomepage, getABC,getHoiDanIT}