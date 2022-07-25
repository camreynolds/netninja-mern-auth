const User = require('../models/userModel');

// login controller
const loginUser = async (req,res) => {
    res.json({mssg: 'login user'})
};

// signup controller
const signupUser = async (req,res) => {
    res.json({mssg: 'signup user'})
};

module.exports = {loginUser, signupUser};