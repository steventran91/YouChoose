const express = require("express");
const router = express.Router();
const passport = require("passport");
const Restaurant = require("../../models/Restaurant");
const API_KEY = require("../../config/yelp_api").YELP_API_KEY;
const yelp = require("yelp-fusion");
const client = yelp.client(API_KEY);

router.get("/search", (req, res) => {
  const searchRequest = {
    term: `${req.query.cuisine} food`,
    location: `${req.query.location}`,
  };

  client
    .search(searchRequest)
    .then((response) => {
      const firstResult = response.jsonBody.businesses.slice(0, 10);
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson);
      res.json(firstResult);
    })
    .catch((e) => {
      console.log(e);
    });
});

router.post("/search", (req, res) => {
  const searchRequest = {
    term: `${req.body.cuisine} food`,
    location: `${req.body.location}`,
  };

  client
    .search(searchRequest)
    .then((response) => {
      const firstResult = response.jsonBody.businesses.slice(0, 10);
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(req.body.cuisine);
      res.json(firstResult);
    })
    .catch((e) => {
      console.log(e);
    });
});

// route to get all of the restaurants
router.get("/", (req, res) => {
  Restaurant.find()
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(400).json(err));
});

// route to get a specific restaurant
router.get("/:restaurant_id", (req, res) => {
  Restaurant.find({ id: req.params.id }) //restaurant_id
    .then((restaurant) => res.json(restaurant))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
