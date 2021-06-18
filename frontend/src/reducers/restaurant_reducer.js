import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS, RECEIVE_FAVORITE_RESTAURANTS } from '../actions/restaurant_actions';

const RestaurantReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_RESTAURANTS:
            return action.restaurants
        case RECEIVE_RESTAURANT:
            return newState[action.restaurant.id] = action.restaurant
        case RECEIVE_FAVORITE_RESTAURANTS:
            return action.restaurantId.favorites
        default:
            return state;
    }
}

export default RestaurantReducer;