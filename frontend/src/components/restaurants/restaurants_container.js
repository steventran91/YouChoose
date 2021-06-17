import { connect } from 'react-redux';
import { fetchRestaurantsByCuisine } from '../../actions/restaurant_actions';   
import Restaurants from './restaurants';
import { receiveLocation, receiveCuisine } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        // restaurants: Object.values(state.restaurants.all)
        region: state.session.location,
        cuisine: state.session.cuisine
    };
};

const mDTP = (dispatch) => {
    return {
      fetchRestaurantsByCuisine: (restaurantData) => dispatch(fetchRestaurantsByCuisine(restaurantData)),
    };
};

export default connect(mSTP, mDTP)(Restaurants)