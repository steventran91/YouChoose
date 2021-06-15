import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from '../actions/restaurant_actions';

const RestaurantReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_RESTAURANTS:
            return action.restaurants
        case RECEIVE_RESTAURANT:
            return newState[action.restaurant.id] = action.restaurant
        default:
            return state;
    }
}

export default RestaurantReducer;