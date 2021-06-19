import React from 'react';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          active: false,
          favoriteList: {}
        }
        this.addToFavorite = this.addToFavorite.bind(this);
    }

    addToFavorite(e){
      e.preventDefault()
      let favorites = this.props.currentUser.favorites;
      let currentRestaurant = this.props.restaurant;
      if(!Object.keys(favorites).includes(currentRestaurant.id)){
        favorites[currentRestaurant.id] = currentRestaurant;
      }else{
          delete favorites[currentRestaurant.id]
          favorites[currentRestaurant.id] = null
          // this.props.helperFavorite()
      }
      this.setState({})
    }

    render(){
        return (
          <div className="restaurant-template">
            <a href={this.props.restaurant.url} target="_blank">Go to Yelp: {this.props.restaurant.name}</a>
            <p>Phone: {this.props.restaurant.phone}</p>
            <p>Address: {this.props.restaurant.location.display_address}</p>
            <p>Price: {this.props.restaurant.price}</p>
            <p>Rating: {this.props.restaurant.rating}</p>
            <img src={this.props.restaurant.image_url} />
            <button className={this.props.currentUser.favorites[this.props.restaurant.id] ? "fav-button-act" : "fav-but"} onClick={(e => this.addToFavorite(e))}> Favorite</button>
          </div>
        );
    }
}

export default Restaurant;