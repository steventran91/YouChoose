import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from '../actions/restaurant_actions';

const RestaurantReducer = (state = {}, action) => {
    Object.fromEntries(state);
    let newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_RESTAURANTS:
            action.restaurants
        case RECEIVE_RESTAURANT:
            return newState[action.restaurant.id] = action.restaurant.ids
        default:
            return state;
    }
}

export default RestaurantReducer;