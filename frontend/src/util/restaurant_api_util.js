import axios from 'axios';

export const getRestaurants = () => {
    return axios.get('/api/restaurants');
}

export const getRestaurant = (restaurantId) => {
    return axios.get(`/api/restaurants/${restaurantId}`);
}

export const getRestaurantsByCuisine = (restaurantData) => {
    return axios.post(`/api/restaurants/search`, restaurantData)
}
