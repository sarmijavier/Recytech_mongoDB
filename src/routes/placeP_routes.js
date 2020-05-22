const { Router } = require('express')
const router = Router()

const {
    renderPlace
} = require('../controllers/placeP.controller')

const { isAuthenticated } = require('../helpers/auth')

//Get all places
router.get('/placeP', isAuthenticated, renderPlace)


module.exports = router