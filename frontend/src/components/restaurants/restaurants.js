import React from 'react';

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          active: false
        }
        this.addToFavorite = this.addToFavorite.bind(this);
    }

    addToFavorite(e){
      e.preventDefault()
      // console.log(this.props)
      let favorites = this.props.currentUser;
      let currentRestaurant = this.props.restaurant.id;
      this.props.fetchFavoriteRestaurant({
        username: this.props.currentUser.username,
        id: currentRestaurant
      }) 
      console.log(favorites);
      console.log(currentRestaurant);

      // if(this.state.active === false){
      //   this.setState({
      //     active: true
      //   })
      //   favorites.push(currentRestaurant);
      // }else{
      //   if(favorites.includes(currentRestaurant)){
      //     let index = favorites.indexOf(currentRestaurant)
      //     delete favorites[index]
      //   }
      //   this.setState({
      //     active: false,
      //   });
      // }
      
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
            <button className={this.state.active ? "fav-button-act" : "fav-but"} onClick={(e => this.addToFavorite(e))}> Favorite</button>
          </div>
        );
    }
}

export default Restaurant;