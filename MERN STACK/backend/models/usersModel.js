const mongoose  = require('mongoose')
const Schema    = mongoose.Schema
const bcrypt    = require('bcrypt')
const validator = require('validator')

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
    // validation
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)){
        throw Error('Email is no valid')
    }
    
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

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