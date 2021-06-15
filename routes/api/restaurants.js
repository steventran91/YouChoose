const express = require("express");
const router = express.Router();
const passport = require("passport");
const Restaurant = require("../../models/Restaurant");


router.get("/test", (req, res) => 
    res.json({ msg: "This is the restaurant route" 
}));

// route to get all of the restaurants 
router.get('/', (req, res) => {
    Restaurant
        .find()
        .then(restaurants => res.json(restaurants))
        .catch(err => res.status(400).json(err));
})

// route to get a specific restaurant
router.get('/:restaurant_id', (req, res) => {
    Restaurant
        .find({ id: req.params.id })
        .then((restaurant) => res.json(restaurant))
        .catch((err) => res.status(400).json(err));
})

module.exports = router;
