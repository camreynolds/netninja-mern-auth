const User      = require('../models/usersModel')
const mongoose  = require('mongoose');
const jwt       = require('jsonwebtoken')

// create token
const createToken = (_id) => {
    return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: '5m'})
}


// login user
const loginUser = async (req,res) => {
    const {email,password} = req.body

    try {
        const user = await User.login(email,password)
        // generate token
        const token = createToken(user._id)
        res.status(200).json({email, token})

    } catch (error) {
        res.status(400).json({error: error.message})
    }    
}

// signup user
const singupUser = async (req,res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        // generate token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser, 
    singupUser
};