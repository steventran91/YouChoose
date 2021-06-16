import React from "react";
import SplashCenter from "./splash_center";
import SplashBottom from "./splash_bottom";
import SlideShow from "./slideshow"
import image1 from "./images/image1.jpg"
// import image2 from "./images/image2.jpg"
// import image3 from "./images/image3.jpg"
import breakfast from "./images/breakfast.jpg"
import lunch2 from "./images/lunch2.jpg"
import breakfast1 from "./images/breakfast1.png"


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
                <hr />
                <SplashBottom props={this.props} />
                <br />
            </div>
        )
    }
}

export default SplashPage;