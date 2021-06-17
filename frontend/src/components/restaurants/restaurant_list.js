import React from 'react';
import RestaurantContainer from './restaurants_container';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        let cuisine = this.props.cuisine
        let region = this.props.region
        this.props.fetchRestaurantsByCuisine({cuisine: cuisine, location: region});
    }

    componentDidUpdate() {
        console.log(this.props.cuisine)
    }

    render() {
        if (this.props.restaurants) {
            return (
              <div className="restaurant-list">
                {Object.values(this.props.restaurants).map((restaurant) => {
                  return <RestaurantContainer restaurant={restaurant} />;
                })}
              </div>
            );
        } else {
            return null;
        }
        
    }
}


export default RestaurantList;