import { connect } from "react-redux";
import { fetchRestaurants } from "../../actions/restaurant_actions";

import RestaurantList from "./restaurant_list";

const mSTP = (state) => ({
  restaurants: Object.values(state.entities.restaurants),
});

const mDTP = (dispatch) => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants()),
  };
};

export default connect(mSTP, mDTP)(RestaurantList);
