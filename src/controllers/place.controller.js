const placeCtrl = {}
const Place = require('../models/Recycle_Place')

placeCtrl.renderPlaceForm = (req, res) => {
    res.render('./place/new-place')
}

placeCtrl.createNewPlace = async(req, res) => {
    const { place_name, address, phone_number, description } = req.body
    const newPlace = new Place({ place_name, address, phone_number, description })
    newPlace.user = req.user._id
    await newPlace.save()
    req.flash('success_msg', 'LUGAR AGREGADO EXITOSAMENTE')
    res.redirect('/place')

}

placeCtrl.renderPlace = async(req, res) => {
    const places = await Place.find({ user: req.user._id }).lean()

    res.render('./place/all-place', { places })
}

placeCtrl.renderEditForm = async(req, res) => {
    const place = await Place.findById(req.params.id).lean()
    if (place.user != req.user._id) {
        req.flash('error_msg', 'Está entrando a un sitio inautorizado')
        return res.redirect('./notes')
    }
    res.render('./place/edit-place', { place })
}

placeCtrl.updatePlace = async(req, res) => {
    const { place_name, address, phone_number, description } = req.body
    await Place.findByIdAndUpdate(req.params.id, { place_name, address, phone_number, description })
    req.flash('success_msg', 'SE HA ACTUALIZADO EXITOSAMENTE')
    res.redirect('/place')
}

placeCtrl.deletePlace = async(req, res) => {
    await Place.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'LUGAR ELIMINADO')
    res.redirect('/place')
}

module.exports = placeCtrl