import React, { Component } from "react";
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md mb-3">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="./assets/img/logo-white.png" className="img-fluid"></img></a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li>
                                <i className="fa fa-shopping-bag"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;