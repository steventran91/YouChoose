import React from 'react';
import RestaurantContainer from './restaurants_container';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getRestaurants()
    }

    render(){
        return(
            <div className="restaurant-list">
                {this.props.restaurants.map(restaurant => {
                    return <RestaurantContainer restaurant= {restaurant} />
                })}
            </div>
        )
    }
}

export default RestaurantList;