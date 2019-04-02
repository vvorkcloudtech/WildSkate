import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                $(".fa-bars").css({ "color": "rgba(0,0,0,0.9)", "transition": "all .5s", "border": "2px solid rgba(0,0,0,0.7)", "box-shadow": "0 0 0 transparent" })
            }
            else {
                Nav.fadeIn('1s').removeClass("fixed-top");
                Nav.css({ 'backgroundColor': "transparent", "transition": "all .8s" })
                $("a.navbar-brand img").attr("src", "./assets/img/logo-white.png")
                $(".nav-link").css({ "color": "rgba(255,255,255,0.9)", "transition": "all .8s" })
                Nav.css({ "box-shadow": "0px 0px 5px rgba(0,0,0,0)" })
                $(".fa-shopping-bag").css({ "color": "rgba(255,255,255,0.9)", "transition": "all .5s" })
                $(".fa-bars").css({ "color": "white", "border": "2px solid rgba(255,255,255,.7)" })
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
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact</Link>
                            </li>
                            <li>
                                <Link to="/cartpage" >
                                    <i className="fa fa-shopping-bag"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;