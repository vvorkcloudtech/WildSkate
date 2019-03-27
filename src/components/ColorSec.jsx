import React, { Component } from "react";
class ColorSec extends Component {
    state = {
        ProdColor: "BlackGold",
    }
    render() {
        return (
            <section id="ColorSec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 Prod d-flex justify-content-center align-items-center flex-wrap">
                            <img src={"./assets/img/" + this.state.ProdColor + ".png"} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6 TextBox d-flex justify-content-center flex-column align-items-start flex-wrap">
                            <span>HeadPhone</span>
                            <h1>K-Beats Wireless Headphone</h1>
                            <p>K-Beats Wireless Headphone headphones deliver a premium listening experience with Pure Adaptive Noise Cancelling (Pure ANC) to actively block external noise, and real-time audio calibration to preserve clarity, range and emotion. It continuously pinpoints external sounds to block while automatically responding to individual fit in real-time, optimizing sound output to preserve a premium listening experience the way artists intended.</p>
                            <hr />
                            <h6>Select Color</h6>
                            <div>
                                <label htmlFor="BlackGold"></label>
                                <input type="radio" name="color" value="0"  onClick={(event =>{this.setState({ProdColor : "BlackGold"});})} defaultChecked id="BlackGold" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
                                <label htmlFor="Red"></label>
                                <input type="radio" name="color" id="Red"  onClick={(event =>{this.setState({ProdColor : "red"});})} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
                                <label htmlFor="Blue"></label>
                                <input type="radio" name="color" id="Blue"  onClick={(event =>{this.setState({ProdColor : "blue"});})}/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
                                <label htmlFor="JetBlack"></label>
                                <input type="radio" name="color" id="JetBlack" onClick={(event =>{this.setState({ProdColor : "black"});})}/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ColorSec;