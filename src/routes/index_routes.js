const { Router } = require('express')
const router = Router()

const passport = require('passport')

const { renderIndex, renderAbout, signgoogle2, signgoogle } = require('../controllers/index.controller')

router.get('/', renderIndex)

router.get('/about', renderAbout)

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}))
router.get('/auth/google/redirect', passport.authenticate('google', { failureRedirect: '/users/signin' }), (req, res) => {
    res.redirect('/place')
})


module.exports = router