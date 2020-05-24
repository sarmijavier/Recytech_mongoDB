const controllerCtrl = {}

const User = require('../models/User')
const passport = require('passport')



controllerCtrl.renderSignUpForm = (req, res) => {
    res.render('./users/signup')
}



controllerCtrl.signup = async(req, res) => {
    const errors = []
    const { name, lastname, id, phone_number, email_address, password, confirm_password } = req.body

    if (name == "" || lastname == "" || id == "" || phone_number == "" || email_address == "" || password == "" || confirm_password == "") {
        errors.push({ text: 'Hay campos vacios!' })
    }
    if (password != confirm_password) {
        errors.push({ text: 'las contraseñas no coinciden' })
    }
    if (password.length < 4) {
        errors.push({ text: 'las contraseña es muy corta' })
    }
    if (phone_number.length < 10 || phone_number.length > 10) {
        errors.push({ text: 'número no valido' })
    }

    if (errors.length > 0) {
        res.render('./users/signup', {
            errors,
            name,
            lastname,
            phone_number,
            email_address
        })
    } else {

        const email_user = await User.findOne({ email_address: email_address })
        const id_user = await User.findOne({ id: id })
        if (email_user) {
            req.flash('error_msg', 'Este correo ya está en uso')
            res.redirect('./signup')
        }
        if (id_user) {
            req.flash('error_msg', 'Esta cedula ya está en uso')
            res.redirect('./signup')
        } else {
            const newUser = new User({ id, name, lastname, phone_number, email_address, password })
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save()
            req.flash('success_msg', 'Ya estás registrado')
            res.render('./users/signin')
        }
    }

}

controllerCtrl.renderSinginForm = (req, res) => {
    res.render('./users/signin')
}



controllerCtrl.signin = passport.authenticate('login', {
    failureRedirect: './signin',
    successRedirect: '../place',
    failureFlash: true
})


controllerCtrl.logout = (req, res) => {
    req.logout()
    req.flash('success_msg', 'Gracias!, vuelve pronto')
    res.redirect('./signin')
}



module.exports = controllerCtrl