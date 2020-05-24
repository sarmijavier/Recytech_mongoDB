const { Router } = require('express')
const router = Router()

const passport = require('passport')

const { renderIndex, renderAbout, signgoogle2, signgoogle } = require('../controllers/index.controller')

router.get('/', renderIndex)

router.get('/about', renderAbout)


module.exports = router