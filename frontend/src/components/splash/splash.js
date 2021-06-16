import React from "react";
import SplashCenter from "./splash_center";
import FoodGallery from "./food_gallery"
import SplashBottom from "./splash_bottom";
import SlideShow from "./slideshow"
import image1 from "./images/image1.jpg"
// import image2 from "./images/image2.jpg"
// import image3 from "./images/image3.jpg"
import breakfast from "./images/breakfast.jpg"
import lunch2 from "./images/lunch2.jpg"
import breakfast1 from "./images/breakfast1.png"
import food1 from "./foods/food1.jpg"
import food2 from "./foods/food2.jpg"
import food3 from "./foods/food3.jpg"
import food4 from "./foods/food4.jpg"
import food5 from "./foods/food5.jpg"
import food6 from "./foods/food6.jpg"
import food7 from "./foods/food7.jpg"

class SplashPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="splash" >
                <div title="gallery">
                    <SlideShow interval={4000} 
                    images={[
                        image1,
                        breakfast,
                        lunch2,
                        breakfast1,
                    ]} />
                </div>
                {/* <div className="splash-main">
                    <div className="splash-text">
                        SPLASH PAGE
                    </div>
                </div> */}
                <SplashCenter props={this.props} />
                <br />
                <FoodGallery interval={2500} images={[
                    food1, food2, food3, food4, food5, food6, food7
                ]} />
                <br />
                <hr />
                <SplashBottom props={this.props} />
                <br />
                <hr />
            </div>
        )
    }
}

export default SplashPage;