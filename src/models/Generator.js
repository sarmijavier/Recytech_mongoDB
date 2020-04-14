const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')

const GeneratorSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        require: true
    },
    email_address: {
        type: String,
        require: true
    },  
    password: {
        type: String,
        require: true
    },
}, {
        timestamps: true
})

GeneratorSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

GeneratorSchema.methods.matchPasswords = function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('Generator',GeneratorSchema)