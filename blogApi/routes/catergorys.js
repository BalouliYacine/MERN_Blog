const router = require('express').Router()
const Catergory = require("../models/Catergory")


router.post('/', async (req, res) => {
    const newCat = new Catergory(req.body)
    try {
        const savedCat = await newCat.save()
        res.status(200).json('Catergory Added')

    } catch (e) {
        res.status(500).json(e)
    }

})


router.get('/', async (req, res) => {
    try {
        const Cats = await Catergory.find()
        res.status(200).json(Cats)

    } catch (e) {
        res.status(500).json(e)
    }

})





module.exports = router
