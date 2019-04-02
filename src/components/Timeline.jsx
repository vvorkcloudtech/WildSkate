import React, { Component } from "react";
class Timeline extends Component {
    render() {
        return (
            <section id="TimelineSec">
                <h1 className="text-center">PAIR. <span>POWER.</span> CONNECT.</h1>
                <p className="text-center">Beats and Apple are changing the way you listen to music with the Apple W1 chip in K-Beats Wireless Headphone headphones.</p>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center flex-wrap flex-row">
                        <div className="col-12 d-flex align-items-center flex-wrap justify-content-center">
                            <div className="col-md-6 bg-white">
                                <div className=" d-flex justify-content-center align-items-center flex-column" >
                                    <h1>All-Day Play</h1>
                                    <p>Up to 22 hours of battery life enables full-featured, all-day wireless playback. Turning Pure ANC off for low-power mode provides up to 40 hours of playback without sacrificing audio quality.</p>
                                </div>
                            </div>
                            <div className="col-md-6 p-md-0 " >
                                <img src="./assets/img/b-features-1.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center flex-wrap-reverse flex-row">
                            <div className="col-md-6 p-md-0" >
                                <img src="./assets/img/b-features-2.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-6 bg-white">
                                <div className=" d-flex justify-content-center align-items-center flex-column" >
                                    <h1>Charge and Go</h1>
                                    <p>Fast Fuel technology can turn 10 minutes of charging into 3 hours of playback when battery is low.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center flex-wrap flex-row">
                            <div className="col-md-6 bg-white">
                                <div className=" d-flex justify-content-center align-items-center flex-column" >
                                    <h1>Industry-Leading Bluetooth®</h1>
                                    <p>Class 1 Bluetooth® technology allows for extended range with fewer dropouts than ever, so you can move freely and keep the music going.</p>
                                </div>
                            </div>
                            <div className="col-md-6 p-md-0" >
                                <img src="./assets/img/b-features-3.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center flex-wrap-reverse flex-row">
                            <div className="col-md-6 p-md-0" >
                                <img src="./assets/img/b-features-4.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-6 bg-white">
                                <div className=" d-flex justify-content-center align-items-center flex-column" >
                                    <h1>Seamless Switching</h1>
                                    <p>iOS 10 or iOS 11 users have the ability to seamlessly switch between iCloud-registered devices*, meaning you can conveniently transfer from taking a call on your iPhone to watching a movie on your MacBook.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Timeline;