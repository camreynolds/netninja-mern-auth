const User = require('../models/userModel');

// login controller
const loginUser = async (req,res) => {
    res.json({mssg: 'login user'})
};

// signup controller
const signupUser = async (req,res) => {
    const {email,password} = req.body;

    try{
        const user = await User.signup(email,password);
        res.status(200).json({email, user});
    }
    catch(error){
        res.status(400).json({Error: error.message});
    };
};

module.exports = {loginUser, signupUser};