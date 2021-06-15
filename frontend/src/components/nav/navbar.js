import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        // this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    // getLinks() {
    //     let display;
    //     if (this.props.loggedIn) {
    //         return display = (
    //             <div className="loggedin-right">
    //                 <button onClick={this.logoutUser}>Logout</button>
    //             </div>
    //         );
    //     } else {
    //         return display = (
    //             <div className="login-buttons">
    //                 <Link className="signup-button" to={'/signup'}>Signup</Link>
    //                 <br />
    //                 <Link className="loginup-button" to={'/login'}>Login</Link>
    //             </div>
    //         );
    //     }
    // }

    render() {
        let display;
        if (this.props.loggedIn) {
            display = (
                <div className="loggedin-right">
                    <button className="logout-button" onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            display = (
                <div className="login-buttons">
                    <Link className="signup-button" to={'/signup'}>Sign Up</Link>
                    <br />
                    <Link className="login-button" to={'/login'}>Login</Link>
                </div>
            );
        }

        return (
            <div className="navbar">
                <div className="navbar-left">
                    <h1 className="youchoose">YouChoose</h1>
                    <Link className="home-button" to={'/'}>Home</Link>
                </div>

                <div className="navbar-right">
                    {display}
                </div>
            </div>
        );
    }
}

export default NavBar;