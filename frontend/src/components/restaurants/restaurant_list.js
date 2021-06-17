import React from 'react';
import RestaurantContainer from './restaurants_container';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.handleIndex = this.handleIndex.bind(this);
        this.handleRandom = this.handleRandom.bind(this);
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
    handleRandom(e){
        e.preventDefault();
        this.setState({ index: Math.floor(Math.random() * Object.values(this.props.restaurants).length)})
    }

    render(){
        if (this.props.restaurants) {
            return(
                <div className="restaurant-page">
                    <button 
                    onClick={this.handleRandom}
                    className="restaurant-you-choose">
                        You Choose
                    </button>
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
                        <RestaurantContainer restaurant={Object.values(this.props.restaurants)[this.state.index]} />
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <p>hi</p>
                </div>
            )
        }
        
    }
}


export default RestaurantList;