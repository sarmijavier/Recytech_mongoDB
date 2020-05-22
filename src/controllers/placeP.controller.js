const placePCtrl = {}
const PlaceP = require('../models/Recycle_Place')


placePCtrl.renderPlace = async(req, res) => {
    const places = await PlaceP.find().lean()
    res.render('./placeP/all-placeP', { places })
}



module.exports = placePCtrl