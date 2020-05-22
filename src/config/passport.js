const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const User = require('../models/User')


passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async(email, password, done) => {

    //existe el correo?
    const user = await User.findOne({ email_address: email })

    if (!user) {
        return done(null, false, { message: 'el usuario no existe' })
    } else {
        match = await bcrypt.compare(password, user.password)
            //const match = await collector.matchPassword(password)
            //console.log(match);
        if (match) {
            return done(null, user)
        } else {
            return done(null, false, { message: 'contraseña incorrecta' })
        }
    }

}))


passport.serializeUser((user, done) => {
    done(null, user._id)
})
passport.deserializeUser((_id, done) => {
    User.findById(_id, (err, user) => {
        done(err, user)
    })
})