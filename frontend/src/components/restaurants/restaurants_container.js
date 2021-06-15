import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';   
import Restaurants from './restaurants'

const mSTP = (state) => {
    return {
        restaurants: Object.values(state.restaurants.all)
    };
};

const mDTP = (dispatch) => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants()),
    };
};

export default connect(mDTP, mSTP)(Restaurants)