const { Router } = require('express')
const router = Router()

const { renderSignUpForm, renderSinginForm, signin,signup,logout } = require('../controllers/collector.controller')

router.get('/users/signup',renderSignUpForm )
router.post('/users/signup',signup)

router.get('/users/signin',renderSinginForm)
router.post('/user/signin',signin)

router.get('/users/logout', logout)



module.exports = router