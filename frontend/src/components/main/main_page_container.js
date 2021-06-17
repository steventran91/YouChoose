
import { fetchRestaurantsByCuisine } from '../../actions/restaurant_actions';
import MainPage from './main_page';
import { connect } from 'react-redux';

// const mSTP = (state) => {
//     restaurants: Object.values()
// }


const mDTP = dispatch => {
    fetchRestaurantsByCuisine: (restaurantData) => dispatch(fetchRestaurantsByCuisine(restaurantData));
}

export default connect(null, mDTP)(MainPage);