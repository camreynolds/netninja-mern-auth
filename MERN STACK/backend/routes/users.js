const express   = require('express')
const router    = express.Router()

// controllers 
const {loginUser, singupUser} = require('../controllers/usersController')

// login route
router.post('/login', loginUser )

// signup route
router.post('/signup', singupUser )


module.exports = router