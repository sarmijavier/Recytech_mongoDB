const { Router } = require('express')
const router = Router()

const { renderSignUpForm, renderSinginForm, renderSingingForm, signin, signup, logout, signing } = require('../controllers/users.controller')

router.get('/users/signup', renderSignUpForm)
router.post('/users/signup', signup)

router.get('/users/signin', renderSinginForm)
router.post('/users/signin', signin)

router.get('/users/logout', logout)




module.exports = router