import React from 'react';
import RestaurantContainer from './restaurants_container';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            activated: false
        }
        this.handleIndex = this.handleIndex.bind(this);
        // this.helperFavorite = this.helperFavorite.bind(this);
    }

    componentDidMount(){
        let cuisine = this.props.cuisine
        let region = this.props.region
        this.props.fetchRestaurantsByCuisine({cuisine: cuisine, location: region});
    }

    componentDidUpdate() {
        console.log(this.props.cuisine)
    }

    handleIndex(index){
        return e => {
            e.preventDefault();
            this.setState({index})
        }
    }

    // helperFavorite(){
    //     this.setState({index: 0})
    // }

    handleFavorites(e){
        e.preventDefault()
        this.setState({
            activated: !this.state.activated,
            index: 0
        })
    }

    

    render(){
        if (this.props.restaurants && !this.state.activated) {
            return(
                <div className="restaurant-page">
                    <button className="favorites-button" onClick={e => this.handleFavorites(e)}>Favorites</button>
                    <ul className="restaurant-list">
                        {Object.values(this.props.restaurants).map((restaurant, index) => {
                            // return <RestaurantContainer restaurant={restaurant} />
                            return <li 
                                    className={this.state.index === index ? "active" : ""}
                                    onClick={this.handleIndex(index)}
                                    key={index}>
                                        {restaurant.name}
                                    </li>
                        })}
                    </ul>
                    <div className="restaurant-show">
                        <RestaurantContainer restaurant={Object.values(this.props.restaurants)[this.state.index]}  />
                    </div>
                </div>
            )
        } 
        else if (this.state.activated) {
            return (
              <div className="restaurant-page">
                <button className="favorites-button" onClick={(e) => this.handleFavorites(e)}>
                  Restaurant List
                </button>
                <ul className="restaurant-list">
                  {Object.values(this.props.favoriteRestaurants).map(
                    (restaurant, index) => {
                      // return <RestaurantContainer restaurant={restaurant} />
                      return (
                        <li
                          className={this.state.index === index ? "active" : ""}
                          onClick={this.handleIndex(index)}
                          key={index}
                        >
                          {restaurant.name}
                        </li>
                      );
                    }
                  )}
                </ul>
                <div className="restaurant-show">
                  <RestaurantContainer
                    
                    restaurant={
                      Object.values(this.props.favoriteRestaurants)[
                        this.state.index
                      ]
                    }
                  />
                </div>
              </div>
            );
        }else{
            return(
            <div>
              nothing is here
            </div>
            )
        }
        
    }
}




export default RestaurantList;