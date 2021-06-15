const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    ratings: {
        type: Number
    }
});

const Restaurant = mongoose.model('restaurant', RestaurantSchema);
module.exports = Restaurant;