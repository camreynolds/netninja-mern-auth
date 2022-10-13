const mongoose  = require('mongoose')
const Schema    = mongoose.Schema
const bcrypt    = require('bcrypt')

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

// static signup method
//! can't use arrow functions when you use "this." you have to use traditional function.
userSchema.statics.signup = async function(email,password){
    const exist = await this.findOne({email})

    if(exist){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    const user = await this.create({email, password: hash})

    return user
}

module.exports = mongoose.model('User',userSchema);