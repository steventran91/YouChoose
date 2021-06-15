import { connect } from "react-redux";
import { getRestaurants } from "../../actions/restaurant_actions";

import RestaurantList from "./restaurant_list";

const mSTP = (state) => ({
  restaurants: Object.values(state.entities.restaurants),
});

const mDTP = (dispatch) => {
  return {
    getRestaurants: (restaurants) => dispatch(getRestaurants(restaurants)),
  };
};

export default connect(mSTP, mDTP)(RestaurantList);
