const User = require('../models/usersModel')
const mongoose = require('mongoose');

// login user
const loginUser = async (req,res) => {
    res.status(200).json({mssg: 'login user'})
}

// signup user
const singupUser = async (req,res) => {
    res.status(200).json({mssg: 'signup user'})
}

module.exports = {
    loginUser, 
    singupUser
};