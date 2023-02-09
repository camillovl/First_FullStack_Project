const mongoose = require('mongoose');

const user = {
    fullname: '',
    user: '',
    password: '',
    avatar: ''
}

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: Buffer,
    }

})

module.exports = mongoose.model('User', userSchema)
