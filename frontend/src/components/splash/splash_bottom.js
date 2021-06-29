import React from "react";

class SplashBottom extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="splash-bottom">
                <div className="splash-bottom-text">
                    <h1 id="splash-bottom">Meet Our Developers</h1>
                    <div className="developers">
                        <div className="steven">
                            Steven Tran
                            <br />
                            <a href="https://github.com/steventran91">Github</a>
                        </div>
                        <br />
                        <div className="juan">
                            Juan Barba
                            <br />
                            <a href="https://github.com/JuanMBarba">Github</a>
                        </div>
                        <div className="mason">
                            Mason Saia
                            <br />
                            <a href="https://github.com/msaia97">Github</a>
                        </div>
                        <div className="brenda">
                            Brenda Jiang
                            <br />
                            <a href="https://github.com/Brenda-J">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashBottom;