const { Router } = require('express')
const router = Router()

const {
    renderPlaceForm,
    createNewPlace,
    renderPlace,
    renderEditForm,
    updatePlace,
    deletePlace
} = require('../controllers/place.controller')

const { isAuthenticated } = require('../helpers/auth')

//New place
router.get('/place/add', isAuthenticated, renderPlaceForm)

router.post('/place/new-place', isAuthenticated, createNewPlace)

//Get all places
router.get('/place', isAuthenticated, renderPlace)

//Edit place
router.get('/place/edit/:id', isAuthenticated, renderEditForm)

router.put('/place/edit/:id', isAuthenticated, updatePlace)

//delete place
router.delete('/place/delete/:id', isAuthenticated, deletePlace)


module.exports = router