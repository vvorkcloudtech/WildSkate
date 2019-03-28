import React, { Component } from "react";
import $ from "jquery";
class Navbar extends Component {
    render() {
        window.onscroll = function () {
            let Coods = $(document).scrollTop();
            let Nav = $("nav");
            if (Coods > 50) {
                Nav.fadeIn("1s").addClass("fixed-top");
                Nav.css({ "box-shadow": "0px 0px 5px rgba(0,0,0,1)" })
                $("a.navbar-brand img").attr("src", "./assets/img/logo.png")
                $(".nav-link").css({ "color": "#4B4453", "transition": "all .8s" })
                $(".fa-shopping-bag").css({ "color": "rgba(0,0,0,0.7)", "transition": "all .8s" })
                Nav.css({ 'backgroundColor': "white", "transition": "all .8s", })
                $(".fa-bars").css({ "color": "rgba(255,255,255,0.9)", "transition": "all .5s" })

            }
            else {
                Nav.fadeIn('1s').removeClass("fixed-top");
                Nav.css({ 'backgroundColor': "transparent", "transition": "all .8s" })
                $("a.navbar-brand img").attr("src", "./assets/img/logo-white.png")
                $(".nav-link").css({ "color": "rgba(255,255,255,0.9)", "transition": "all .8s" })
                Nav.css({ "box-shadow": "0px 0px 5px rgba(0,0,0,0)" })
                $(".fa-shopping-bag").css({ "color": "rgba(255,255,255,0.9)", "transition": "all .5s" })
                $(".fa-bars").css({ "color": "white" })
            }
        }
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