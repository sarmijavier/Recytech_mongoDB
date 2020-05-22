const { Schema, model } = require('mongoose')
var bcrypt = require('bcryptjs');

const UserSchema = new Schema({
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
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

/* CollectorSchema.methods.matchPassword = async password => {
    
    return await bcrypt.compare(password, this.password)
} */

module.exports = model('Users', UserSchema)