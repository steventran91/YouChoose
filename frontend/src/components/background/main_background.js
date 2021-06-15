import React from 'react';
import morning from './images/morning.jpg'
import afternoon from './images/afternoon.jpg'
import night from './images/night.jpg'

class Background extends React.Component{
    constructor(props){
        super(props)
    }

    handleNoonClick(e){
        e.preventDefault()
        return (
          <div
            className="noon-bg"
            style={{ backgroundImage: `url(${afternoon})` }}
          >
            <button
              type="button"
              className="main-button"
              onClick={(e) => this.handleMorningClick(e)}
            >
              Breakfast
            </button>
            <button
              type="button"
              className="main-button"
              onClick={(e) => this.handleNoonClick(e)}
            >
              Lunch
            </button>
            <button
              type="button"
              className="main-button"
              onClick={(e) => this.handleNightClick(e)}
            >
              Dinner
            </button>
          </div>
        );
    }

    handleNightClick(e){
        e.preventDefault()
        return (
          <div
            className="night-bg"
            style={{ backgroundImage: `url(${night})` }}
          >
            <button
              type="button"
              className="main-button"
              onClick={(e) => this.handleMorningClick(e)}
            >
              Breakfast
            </button>
            <button
              type="button"
              className="main-button"
              onClick={(e) => this.handleNoonClick(e)}
            >
              Lunch
            </button>
            <button
              type="button"
              className="main-button"
              onClick={(e) => this.handleNightClick(e)}
            >
              Dinner
            </button>
          </div>
        );
    }

    handleMorningClick(e){
        e.preventDefault()
        return (
          <div
            className="morning-bg"
            style={{ backgroundImage: `url(${morning})` }}
          >
            <button
              type="button"
              className="main-button"
              onClick={(e) => this.handleMorningClick(e)}
            >
              Breakfast
            </button>
            <button
              type="button"
              className="main-button"
              onClick={(e) => this.handleNoonClick(e)}
            >
              Lunch
            </button>
            <button
              type="button"
              className="main-button"
              onClick={(e) => this.handleNightClick(e)}
            >
              Dinner
            </button>
          </div>
        );
    }

    render(){
        let today = new Date();
        let hour = today.getHours();
        if(hour < 11 ){
            return (
              <div
                className="morning-bg"
                style={{ backgroundImage: `url(${morning})` }}
              >
                <button
                  type="button"
                  className="main-button"
                  onClick={(e) => this.handleMorningClick(e)}
                >
                  Breakfast
                </button>
                <button
                  type="button"
                  className="main-button"
                  onClick={(e) => this.handleNoonClick(e)}
                >
                  Lunch
                </button>
                <button
                  type="button"
                  className="main-button"
                  onClick={(e) => this.handleNightClick(e)}
                >
                  Dinner
                </button>
              </div>
            );
        }else if(hour > 11 && hour < 16){
           return (
             <div
               className="noon-bg"
               style={{ backgroundImage: `url(${afternoon})` }}
             >
               <button
                 type="button"
                 className="main-button"
                 onClick={(e) => this.handleMorningClick(e)}
               >
                 Breakfast
               </button>
               <button
                 type="button"
                 className="main-button"
                 onClick={(e) => this.handleNoonClick(e)}
               >
                 Lunch
               </button>
               <button
                 type="button"
                 className="main-button"
                 onClick={(e) => this.handleNightClick(e)}
               >
                 Dinner
               </button>
             </div>
           ); 
        }else{
            return (
              <div
                className="morning-bg"
                style={{ backgroundImage: `url(${night})` }}
              >
                <button
                  type="button"
                  className="main-button"
                  onClick={(e) => this.handleMorningClick(e)}
                >
                  Breakfast
                </button>
                <button
                  type="button"
                  className="main-button"
                  onClick={(e) => this.handleNoonClick(e)}
                >
                  Lunch
                </button>
                <button
                  type="button"
                  className="main-button"
                  onClick={(e) => this.handleNightClick(e)}
                >
                  Dinner
                </button>
              </div>
            );
        }
    }
}

export default Background;