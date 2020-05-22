const { Schema, model } = require('mongoose')

const Recycle_PlaceSchema = new Schema({
    place_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = model('Recycle_Place', Recycle_PlaceSchema, 'places')