import React from "react";
import SplashCenter from "./splash_center";
import SplashBottom from "./splash_bottom";

class SplashPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="splash" >
                <div className="splash-main">
                    <div className="splash-text">
                        SPLASH PAGE
                    </div>
                </div>
                <SplashCenter props={this.props} />
                <SplashBottom props={this.props} />
            </div>
        )
    }
}

export default SplashPage;