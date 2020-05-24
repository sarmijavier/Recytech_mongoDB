const passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy
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

passport.use(
    new GoogleStrategy({
        clientID: '838198018326-it97c3ci4jjs96ks2be3nrr5f2q039md.apps.googleusercontent.com',
        clientSecret: '4rZ8vOswPlVJFEumsE1q70Ty',
        callbackURL: "http://localhost:4000/auth/google/redirect"
    }, async(accessToken, refreshToken, profile, cb) => {
        console.log(profile);

        User.findOne({ id: profile.id }).then((currentUser) => {
            if (currentUser) {
                return cb(null, false, { message: 'El usuario ya existe' })
            } else {
                new User({
                    id: profile.id,
                    name: profile.name.givenName,
                    lastname: profile.name.familyName,
                    phone_number: profile.id,
                    email_address: `${profile.name.givenName}@gmail.com`,
                    password: profile.id
                }).save().then((newUser) => {
                    console.log(('nuevo usuario creado' + newUser));
                    return cb(null, newUser)

                })
            }
        })

    })
)


passport.serializeUser((user, done) => {
    done(null, user._id)
})
passport.deserializeUser((_id, done) => {
    User.findById(_id, (err, user) => {
        done(err, user)
    })
})