import React from "react";
import morning from './images/morning.jpeg' 
import afternoon from './images/afternoon.jpeg' 
import night from "./images/night.jpeg"; 
import Wheel from "../the_wheel/wheel"

class MainPage extends React.Component {
  constructor() {
    super()
    let today = new Date();
    let hour = today.getHours();
    let index = 0;

    if(hour < 11){
      index = 0
    }else if(hour > 11 && hour < 16){
      index = 1
    }else{
      index = 2
    }

    this.state = {
      index: index,
      imgList: [morning, afternoon, night],
      
    }

    this.handleMorningClick = this.handleMorningClick.bind(this);
    this.handleNoonClick = this.handleNoonClick.bind(this);
    this.handleNightClick = this.handleNightClick.bind(this);
  }

  handleMorningClick(){
   if(this.state.index !== 0){
    this.setState({
      index: 0
    })
   }
  }

  handleNoonClick(){
   if(this.state.index !== 1){
    this.setState({
      index: 1
    })
   }
  }

  handleNightClick(){
   if(this.state.index !== 2){
    this.setState({
      index: 2
    })
   }
  }

  render() {
      return (
        <div className="main-container">
          <img src={this.state.imgList[this.state.index]} className="backgroundImg"/>
          <button onClick={this.handleMorningClick}>Breakfast</button>
          <button onClick={this.handleNoonClick}>Lunch</button>
          <button onClick={this.handleNightClick}>Dinner</button>
          <Wheel />
          <footer>Copyright &copy; 2021 SHEEEESH</footer>
        </div>
      );
  }
}

export default MainPage;
