const router = require('express').Router()
const User = require("../models/User")

// Register
router.post('/register', async (req, res) => {
    try {



    }
    catch (e) {
        res.status(500).json(e)
    }
})




// LogIn