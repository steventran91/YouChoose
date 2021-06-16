import React from "react";

class SplashBottom extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="splash-bottom">
                <div className="splash-bottom-text">
                <h1 id="splash-bottom">Meet Our Developers</h1>
                    <div className="developers">
                        <div className="steven">Steven Tran</div>
                        <div className="juan">Juan Barba</div>
                        <div className="mason">Mason Saia</div>
                        <div className="brenda">Brenda Jiang</div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default SplashBottom;