const indexCtrl = {}

const passport = require('passport')

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
}

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
}





module.exports = indexCtrl