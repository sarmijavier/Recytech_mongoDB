const { Router } = require('express')
const router = Router()

const {  renderPlaceForm, 
    createNewPlace, 
    renderPlace, 
    renderEditForm, 
    updatePlace, 
    deletePlace 
} = require('../controllers/place.controller')


//New place
router.get('/place/add', renderPlaceForm)

router.post('/place/new-place', createNewPlace)

//Get all places
router.get('/place', renderPlace)

//Edit place
router.get('/place/edit/:id', renderEditForm)

router.put('/place/edit/:id', updatePlace)

//delete place
router.delete('/place/delete/:id', deletePlace)


module.exports = router
