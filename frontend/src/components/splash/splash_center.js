import React from "react";

class SplashCenter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="splash-center">
                <div className="splash-text">
                    <h1 className="about-me">About YouChoose</h1>
                    <br />
                    <h2 className="about-me-question">Have you ever wondered about what you should eat that day?</h2>
                    
                    </div>
            </div>
        )
    }
}

export default SplashCenter;