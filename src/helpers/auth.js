const helpers = {}


helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }

    req.flash('error_msg', 'Debes Iniciar Sesión!')
    res.redirect('/users/signup')
}


module.exports = helpers