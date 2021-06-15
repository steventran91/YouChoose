import { getRestaurant, getRestaurants } from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveRestaurants = (restaurants) => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
});

export const receiveRestaurant = (restaurant) => ({
    type: RECEIVE_RESTAURANT,
    restaurant
});

export const fetchRestaurants = () => (dispatch) => 
    getRestaurants()
        .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
        .catch((err) => console.log(err));

export const fetchRestaurant = (restaurantId) => (dispatch) =>
  getRestaurant(restaurantId)
    .then((restaurant) => dispatch(receiveRestaurant(restaurant)))
    .catch((err) => console.log(err));