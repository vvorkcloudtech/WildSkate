import React, { Component } from "react";
import NavBar from "./Navbar";
import $ from 'jquery';
class Home extends Component {
    state={
        width : window.innerWidth,
    }
    render() {
        console.log(this.state.width)
        return (
            <section id="Home-container" className="container-fluid">
                <NavBar />
                <div className="container">
                    <div className="row d-flex justify-content-center flex-wrap">
                        <div className="HomeText col-md-5 d-flex justify-content-center flex-column align-content-center flex-wrap">
                                <span>Landing page for</span>
                                <h1>K-Beats Wireless Headphone</h1>
                                <h5>Hear the music. Not the noise.</h5>
                        </div>
                        <div className="HomeProduct HomeText col-md-7 d-flex justify-content-center flex-column align-content-center flex-wrap">
                            <img src="./assets/img/headphones-1.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Home;