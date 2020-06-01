const { Router } = require('express')
const router = Router()
const passport = require('passport')



const { renderSignUpForm, renderSinginForm, signin, signup, signinGoogleCreate, signinGoogleRedirectCreate, signinGoogleAuth, signinGoogleRedirectAuth, logout } = require('../controllers/users.controller')

router.get('/users/signup', renderSignUpForm)
router.post('/users/signup', signup)

router.get('/users/signin', renderSinginForm)
router.post('/users/signin', signin)

router.get('/auth/google', passport.authenticate('Register', {
    scope: ['profile']
}))
router.get('/auth/google/redirect', passport.authenticate('Register', { failureRedirect: '/users/signin' }), (req, res) => {
    res.redirect('/place')
})

router.get('/auth/google2', passport.authenticate('auth', {
    scope: ['profile']
}))

router.get('/auth/google2/redirect', passport.authenticate('auth', { failureRedirect: '/users/signup' }), (req, res) => {
    res.redirect('/place')
})


router.get('/users/logout', logout)





module.exports = router