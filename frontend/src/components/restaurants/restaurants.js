import React from 'react';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
          <div className="restaurant-template">
            <a href={this.props.restaurant.url} target="_blank">
              Go to Yelp: {this.props.restaurant.name}
            </a>
            <p>Phone: {this.props.restaurant.phone}</p>
            <p>Address: {this.props.restaurant.location.display_address}</p>
            <p>Price: {this.props.restaurant.price}</p>
            <p>Business Hours: {this.props.restaurant.hours}</p>
            <p>Open: {this.props.restaurant.is_open_now}</p>
            <p>Rating: {this.props.restaurant.rating}</p>
            <img src={this.props.restaurant.image_url} />
          </div>
        );
    }
}

export default Restaurant;