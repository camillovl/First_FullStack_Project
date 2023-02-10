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
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: Buffer,
    }

})

userSchema.statics.isThisEmailInUse = async function (email) {
    if (!email) throw new Error('Invalid Email')
    try {
        const user = await this.findOne({ email })
        if (user) return false

        return true;
    } catch (error) {
        console.log("error inside isThisEmailInUse method", error.message)
    }
}


module.exports = mongoose.model('User', userSchema);
