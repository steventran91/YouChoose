import React from 'react';

class Restaurant extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     restaurant: {}
        // }
    }

    render(){
      console.log(this.props)
        return (
          <div className="restaurant-template">
            <a href={this.props.restaurant.url}>{this.props.restaurant.name}</a>
            {/* <p>{this.props.restaurant.location.display_address}</p> */}
            <p>{this.props.restaurant.rating}</p>
            <img src={this.props.restaurant.image_url} />
            {/* <p>can you say something else it wasnt working before</p> */}
          </div>
        );
    }
}

export default Restaurant;