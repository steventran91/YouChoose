import React from 'react';

class Restaurant extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurant: {}
        }
    }

    render(){
        <div className="restaurant-template">
            <p>{this.props.name}</p>
            <p>{this.props.description}</p>
            <p>{this.props.category}</p>
            <p>{this.props.rating}</p>
        </div>
    }
}

export default Restaurant;